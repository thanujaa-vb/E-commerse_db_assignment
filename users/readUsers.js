var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/E-commerce_db";
MongoClient.connect(url, function (err, client) {
    const db = client.db("E-commerse_db");
    if (err) throw err;
    var query = { first_name: "Jhon" };
    db.collection("Users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        client.close();
    });
});
