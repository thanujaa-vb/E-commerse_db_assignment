var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/ E-commerce_db";
MongoClient.connect(url, function (err, client) {
   const db = client.db("E-commerse_db");
   if (err) throw err;
   var mysort = { total_items: -1 };
   db.collection("Orders").find().sort(mysort).toArray(function (err, result) {
      if (err) throw err;
      console.log("Total items sorted in desending order");
      console.log(result);
      client.close();
   });
});