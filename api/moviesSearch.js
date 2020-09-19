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
                score: { $meta: 'searchScore' },
            },
        }], (_err, result) => {
            result.toArray((_err, docs) => {
                return res.send(docs);
            })
        });
};

module.exports = moviesSearch;
