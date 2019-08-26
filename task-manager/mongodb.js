const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager"

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect")
    }

    const db = client.db(databaseName);

    // db.collection("users").insertOne({
    //     name: "Arek",
    //     age: "20"
    // }, (error, result) => {
    //     if(error) {
    //         return console.log("Unable to insert user")
    //     }
    //     console.log(result.ops);
    // })

    // db.collection("users").insertMany([
    //     {
    //         name: "Jen",
    //         age: "29"
    //     },
    //     {
    //         name: "Luke",
    //         age: "19"
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log("Unable to inserts documents");
    //     }
    //     console.log(result.ops)

    // })

    db.collection("tasks").insertMany([
        {
            description: "Take a dog for a walk",
            completed: false
        },
        {
            description: "Do a shopping",
            completed: false
        }
    ], (error, result) => {
        if(error) {
            return console.log("Unable to inserts documents")
        }
        console.log(result.ops);

    })
})