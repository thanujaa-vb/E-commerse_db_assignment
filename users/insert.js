var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/E-commerse_db";
MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  var myobj = [
    {
      first_name: "Thanuja",
      last_name: "Aalavala",
      email: "thanuja.a@valuebound.com",
      profile_image: "profile-image1",
      role: "Trainee"
    },
    {
      first_name: "Jhon",
      last_name: "Pol",
      email: "jhon@gmail.com",
      profile_image: "profile-image2",
      role: "Software Engineer"
    },
    {
      first_name: "Raj",
      last_name: "Goli",
      email: "raj@gmail.com",
      profile_image: "profile-image3",
      role: "Developer"
    },
    {
      first_name: "Reena",
      last_name: "Shaik",
      email: "reena@gmail.com",
      profile_image: "profile-image4",
      role: "Tester"
    },
    {
      first_name: "Jhon",
      last_name: "Dadi",
      email: "jhon@gmail.com",
      profile_image: "profile-image5",
      role: "Manager"
    },
    {
      first_name: "Raj",
      last_name: "Goli",
      email: "raj.g@gmail.com",
      profile_image: "profile-image6",
      role: "Developer"
    },
  ];
  const db = client.db("E-commerse_db");
  db.collection("Users").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    client.close();
  });
});

