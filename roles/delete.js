var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/E-commerse_db";
MongoClient.connect(url, function (err, client) {
    const db = client.db("E-commerse_db");
    if (err) throw err;
    var myquery = { name: 'editor' };
    db.collection("Roles").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log(obj.result + " record(s) deleted");
        var myquery2 = { slug: 'administrator' };
        db.collection("Roles").deleteMany(myquery2, function (err, obj) {
            if (err) throw err;
            console.log(obj.result + " record(s) deleted");
            console.log(obj);
            client.close();
        });
    });
});