const connectMongo = require('../services/mongodb');

const moviesSearch = async (req, res) => {
    const { query = '' } = req.query;
    const db = await connectMongo();
    db.collection('movies').aggregate([
        {
            $search: {
                search: {
                    query,
                    path: ['title', 'plot'],
                    score: { boost: { value: 3 } },
                },
            },
        },
        {
            $project: {
                _id: 0,
                title: 1,
                plot: 1,
                rated: 1,
                genres: 1,
                released: 1,
                score: { $meta: 'searchScore' },
            },
        },{
            $limit: 25,
        }], (_err, result) => {
            result.toArray((_err, docs) => {
                return res.send(docs);
            })
        });
};

module.exports = moviesSearch;
