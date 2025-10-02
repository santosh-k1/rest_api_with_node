let express = require('express');
let app = express();
let fs = require('fs');

app.get('/data', function (req, res) {
fs.readFile(__dirname + "/" +'data.json', 'utf8', function (err, data) {
    if (err) {
        res.status(500).send('Error reading data file');
        return;
    }
    else {
        console.log(data);
        res.end(data);
    }

})
});
let server = app.listen(8081, function () {
if (server && server.address()) {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
} else {
    console.error("Server failed to start or address is unavailable.");
}
});