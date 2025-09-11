const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
app.use(express.static(__dirname));

// Without middleware
app.get('/', function (req, res) {
    const options = {
        root: path.join(__dirname)
    };
    const fileName = "page d'acceuil.html";
    res.sendFile(fileName, options);
});

app.listen(PORT, function (err) {
    if (err) console.error(err);
    console.log("Server listening on PORT", PORT);
});