
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager"


const {MongoClient, ObjectID } = require("mongodb");



MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect")
    }

    const db = client.db(databaseName);

    // db.collection("users").findOne({_id: new ObjectID("5de39b4b4938393a246d67f0")}, (error, user) => {
    //     if(error) {
    //         return console.log("Unable to fetch");
    //     }

    //     console.log(user);
    // })
    // db.collection("users").find({name: "Arek"}).toArray((error, users) => {
    //     if(error) {
    //         return console.log("Unable to fetch");
    //     }
    //     console.log(users);
    // })
    // db.collection("users").find({name: "Arek"}).count((error, count) => {
    //     if(error) {
    //         return console.log("Unable to fetch");
    //     }
    //     console.log(count);
    // })
    db.collection("tasks").findOne({_id: new ObjectID("5d63c537b9384522903beea1")}, (error, task) => {
        if(error){
            return console.log("Error");
        }
        console.log(task)
    });

    db.collection("tasks").find({completed: false}).toArray((error, ar) => {
        if(error){
            return console.log("Error");
        }
        console.log(ar);
    })

})