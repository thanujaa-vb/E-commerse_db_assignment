var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/E-commerse_db";
MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    var myobj = [
        {
            name: "ADIDAS SHOES",
            thumbnail: "thumbnail-1",
            product_gallary: "",
            description: "Adidas AG  is a multinational corponation founded  and headquarted in Herzogennaurach.",
            base_price: 1423.0,
            sell_price: 323.766,
            category_name: "Foot Ware",
            tags: "shoes",
            additional_information: "one of the best choice."
        },
        {
            name: "REPLICA SNEAKERS",
            thumbnail: "thumbnail-2",
            product_gallary: "",
            description: "Made to resemble men's shoes in Austria during the 70s,this smooth leather low top sneaker features tonal suede panels.",
            base_price: 937.86,
            sell_price: 660.34,
            category_name: "Foot Ware",
            tags: "sneakers",
            additional_information: "best product"
        },
        {
            name: "Laptop Pro",
            thumbnail: "thumbnail-3",
            product_gallary: "",
            description: "Loreum ipsum dolor sit, consectetur adpiscing elit",
            base_price: 70578.978,
            sell_price: 60234.756,
            category_name: "Laptops",
            tags: "laptop",
            additional_information: "good choice"
        },
        {
            name: "Mac Book",
            thumbnail: "thumbnail-4",
            product_gallary: "",
            description: "The new macbook delivers upto 20 percent faster performance with new seventh-generation intel Core m3, i5 and i7 processors.",
            base_price: 200578.978,
            sell_price: 120234.756,
            category_name: "Laptops",
            tags: "laptop",
            additional_information: "good product"
        },

    ];
    const db = client.db("E-commerse_db");
    db.collection("Products").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of records inserted: " + res.insertedCount);
        client.close();
    });
});