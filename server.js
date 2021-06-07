const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/Angular-Test'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname+'/dist/Angular-Test/index.html'));
});

console.log('this is the port', process.env.PORT || 8000);
app.listen(process.env.PORT || 8080);

