# express-atlas-search

Express.js application with examples of the usage of Atlas Search aggregator `$search`.

## Run locally

1. clone
2. yarn install
3. yarn start

## APIs

### GET /movies/search?query=${anyString}

It will search using autocomplete operator in a collection of 23k movies, specifically it will search on the fields `title` & `plot`
