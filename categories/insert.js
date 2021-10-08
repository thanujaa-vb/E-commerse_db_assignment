var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/E-commerse_db";
MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  var myobj = [
    {
      name: "Data Cards",
      slug: "data-only",
      image: "image1",
      description: "TSIM'S data cards give you huge amonunt of 3G/4G data on your phone, tablet, smartphone or laptop at lowest rates."
    },
    {
      name: "Free Gifts",
      slug: "travel-accessories",
      image: "image2",
      description: "Last Minute Travel Accessories that you may require."
    },
    {
      name: "Multi Country",
      slug: "multi-country",
      image: "image3",
      description: "Use multi country sim cards for travel to multiple countries."
    },
    {
      name: "Unlimited",
      slug: "unlimited-multi-country",
      image: "image4",
      description: "Unlimited SIM cards have free calls locally and to India, free incoming, free SMS and unlimited data."
    },
    {
      name: "Multi Country",
      slug: "limited-multi-country",
      image: "image5",
      description: "Use multi country sim cards for travel to multiple countries."
    },
    {
      name: "Foot Ware",
      slug: "foot-ware",
      image: "image6",
      description: "Footware in the manner of shoes,sandals etc,Footware can be used for fashion and adornment."
    },

  ];
  const db = client.db("E-commerse_db");
  db.collection("Categories").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    client.close();
  });
});