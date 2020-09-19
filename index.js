require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/movies/search', require('./api/moviesSearch.js'));
app.get('/', require('./api/renderReadme'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
