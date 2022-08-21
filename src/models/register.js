const mongoose = require("mongoose")

let Validator = require('validatorjs');
const bcrypt = require('bcrypt');



const netflixdata = new mongoose.Schema({


    fname: {

        type: String,


    },
    email: {

        type: String,
        Number,

    },
    password: {

        type: String,
        Number,


    }


});



// netflixdata.pre("save" , async function(next){


//     if(this.isModified("password")){



// this.password=await bcrypt.hash(this.password,12)




//     }

//     console.log(this.password)

//     next()

// })




// netflixdata.pre("save", async function(next){


//     if(this.isModified("password")){

//         this.password= await bcrypt.hash(this.password,10)



//         console.log(this.password)
//     }





//     next()
// })


const Register = mongoose.model("Users", netflixdata);


module.exports = Register;