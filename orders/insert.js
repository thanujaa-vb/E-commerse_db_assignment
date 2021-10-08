var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/E-commerse_db";
MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    var myobj = [
        {
            users_id: 1,
            total_items: 2,
            products: ["laptop", "shoes"],
            billing_address: "Hydarabad",
            shipping_address: "Chennai",
            transaction_status: "success"
        },
        {
            users_id: 3,
            total_items: 1,
            products: ["sneakers"],
            billing_address: "Chennai",
            shipping_address: "Chennai",
            transaction_status: "success"
        },
        {
            users_id: 4,
            total_items: 4,
            products: ["laptop", "shoes", "sneakers", "shirt"],
            billing_address: "Hydarabad",
            shipping_address: "Hyderabad",
            transaction_status: "fail"
        },
        {
            users_id: 3,
            total_items: 1,
            products: ["shoes"],
            billing_address: "Hydarabad",
            shipping_address: "Chennai",
            transaction_status: "success"
        },

    ];
    const db = client.db("E-commerse_db");
    db.collection("Orders").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of records inserted: " + res.insertedCount);
        client.close();
    });
});