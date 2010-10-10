var express = require('express'), app = module.exports = express.createServer();
app.use(express.staticProvider(__dirname));
app.listen(8003);