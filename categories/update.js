var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/E-commerse_db";
MongoClient.connect(url, function (err, client) {
    const db = client.db("E-commerse_db");
    if (err) throw err;
    var myquery = { name: "Free Gifts" };
    var newValue = { $set: { name: "Accesseroies" } };
    db.collection("Categories").updateOne(myquery, newValue, function (err, obj) {
        if (err) throw err;
        console.log(obj.result + " record(s) updated");
        console.log(obj);
        client.close();
    });
});