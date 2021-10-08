var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/E-commerce_db";
MongoClient.connect(url, function (err, client) {
    const db = client.db("E-commerse_db");
    if (err) throw err;
    db.collection("Tags").find().toArray(function (err, result) {
        if (err) throw err;
        console.log("All Records");
        console.log(result);
        client.close();
    });
});