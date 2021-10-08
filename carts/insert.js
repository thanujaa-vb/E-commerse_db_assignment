var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/E-commerse_db";
MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    var myobj = [
        {
            product: "Laoptop",
            user: "Jhon",
            product_qty: 2,
            base_price: 300234.45,
            sell_price: 250345.23,
            total_price: 250345.23
        },
        {
            product: "Shoes",
            user: "Raj",
            product_qty: 1,
            base_price: 4646.00,
            sell_price: 2345.56,
            total_price: 2345.56
        },
        {
            product: "Sneakers",
            user: "Jhon",
            product_qty: 3,
            base_price: 6646.98,
            sell_price: 5675.00,
            total_price: 5675.00
        },
        {
            product: "Laptop",
            user: "Ram",
            product_qty: 1,
            base_price: 50325.00,
            sell_price: 45097.46,
            total_price: 45097.46
        },

    ];
    const db = client.db("E-commerse_db");
    db.collection("Carts").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of records inserted: " + res.insertedCount);
        client.close();
    });
});