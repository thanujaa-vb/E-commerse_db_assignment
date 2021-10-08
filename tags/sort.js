var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ E-commerce_db";
MongoClient.connect(url, function (err, client) {
   const db = client.db("E-commerse_db");
   if (err) throw err;
   var mysort = { name: 1 };
   db.collection("Tags").find().sort(mysort).toArray(function (err, result) {
      if (err) throw err;
      console.log("sorted name in assending order");
      console.log(result);
      client.close();
   });
});