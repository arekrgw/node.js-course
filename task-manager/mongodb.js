
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager"


const {MongoClient, ObjectID } = require("mongodb");



MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect")
    }

    const db = client.db(databaseName);

    // db.collection("users").updateOne({_id: new ObjectID("5d63c30a23f44a33ecd9e038")}, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then(({modifiedCount}) => {
    //     console.log(modifiedCount);
    // }).catch(error => {
    //     console.log(error);
    // })

    db.collection("tasks").updateMany({
        completed: false
    },
    {
        $set: {
            completed: true
        }
    }).then(({modifiedCount}) => {
        console.log(modifiedCount);
    }).catch(error => {
        console.log(error);
    })

})