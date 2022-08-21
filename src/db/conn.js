// const mongoose=require("mongoose");


// mongoose.connect("mongodb://localhost:27017/anku",{



// useNewUrlParser:true,
// useCreateIndex:true,

// useUnifiedTopology:true,
// useFindAndModify:false
// }).then((result) => {

//     console.log("connection mongodb")


// }).catch((err) => {

//     console.log("not connection mongodb")
// });





const mongoose = require('mongoose');


const DB = "mongodb+srv://jugal786:jugal786@cluster0.sgg8t.mongodb.net/ones?retryWrites=true&w=majority";



mongoose.connect(DB, {



    useNewUrlParser: true,
    useUnifiedTopology: true,
    // userCreateIndex: true,
    // userFindAndModify: false,


}).then((result) => {

    console.log("to connect")

}).catch((err) => {

    console.log("error")

});