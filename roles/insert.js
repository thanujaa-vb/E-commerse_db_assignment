var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/E-commerse_db";
MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  var myobj = [
    {
      name: "administrator",
      slug: "administrator"
    },
    {
      name: "editor",
      slug: "editor"
    },
    {
      name: "contributer",
      slug: "contributer"
    },
    {
      name: "subscriber",
      slug: "subscriber"
    },
    {
      name: "administrator",
      slug: "administrators"
    },
  ];
  const db = client.db("E-commerse_db");
  db.collection("Roles").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    client.close();
  });
});