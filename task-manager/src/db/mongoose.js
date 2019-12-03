const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})


const User = mongoose.model("User", {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})


const me = new User({name: "Piotr", age: 20});

me.save().then(() => {
    console.log(me)
}).catch(er => {
    console.log(er)
})