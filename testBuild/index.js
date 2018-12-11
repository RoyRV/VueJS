const express = require("express");
const  history=require('connect-history-api-fallback');
const app = express();

app.use(history({index : '/index.html'}));

app.use('/', express.static('dist', { index: 'index.html' }))

app.listen(8081, () => console.log('Server listening on port 8081!'));

