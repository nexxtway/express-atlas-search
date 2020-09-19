const fs = require('fs');
const path = require('path');
const markdown = require('markdown').markdown;

const readme = fs.readFileSync(path.join(__dirname, '../README.md'));

const renderReadme = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    return res.send(
        html(markdown.toHTML(readme.toString()))
    );
};

const html = (body) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>express-atlas-search</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
</head>
<body>
    <div>${body}</div>
</body>
</html>
`

module.exports = renderReadme;
