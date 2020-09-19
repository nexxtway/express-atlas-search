const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGO_URL
const dbName = 'sample_mflix';

const client = new MongoClient(url, {
    useUnifiedTopology: true,
});
let db = false;

const connectMongo = () => {
    if (db) {
        return Promise.resolve(db);
    }
    return new Promise((resolve, reject) => {
        client.connect((err) => {
            if (err) {
                return reject(err);
            }
            console.log('Connected successfully to Mongo Atlas cluster.');
            db = client.db(dbName);
            return resolve(db);
        });
        
    });
}

(async () => {
    try {
        await connectMongo();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})()

module.exports = connectMongo;
