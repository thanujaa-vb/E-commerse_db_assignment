var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/E-commerse_db";
MongoClient.connect(url, function (err, client) {
    const db = client.db("E-commerse_db");
    if (err) throw err;
    var myquery = { name: 'Afghanistan' };
    db.collection("Tags").deleteMany(myquery, function (err, obj) {
        if (err) throw err;
        console.log(obj.result + " record(s) deleted");
        console.log(obj);
        var myquery2 = { slug: 'albania' };
        db.collection("Tags").deleteMany(myquery2, function (err, obj) {
            if (err) throw err;
            console.log(obj.result + " record(s) deleted");
            console.log(obj);
            client.close();
        });
    });
});