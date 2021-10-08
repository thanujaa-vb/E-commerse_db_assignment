var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/E-commerse_db";
MongoClient.connect(url, function (err, client) {
    const db = client.db("E-commerse_db");
    if (err) throw err;
    var myquery = { "$or": [{ product: 'Laptop' }, { product: "Sneakers" }] };
    db.collection("Carts").deleteMany(myquery, function (err, obj) {
        if (err) throw err;
        console.log(obj.result + " record(s) deleted");
        console.log(obj);
        client.close();
    });
});
