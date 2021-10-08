var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/E-commerse_db";
MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  var myobj = [
    {
      name: "Afghanistan",
      slug: "afghanistan"
    },
    {
      name: "Albania",
      slug: "albania"
    },
    {
      name: "America",
      slug: "america"
    },
    {
      name: "Angola",
      slug: "angola"
    },
    {
      name: "Anguilla",
      slug: "anguilla"
    },
  ];
  const db = client.db("E-commerse_db");
  db.collection("Tags").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    client.close();
  });
});