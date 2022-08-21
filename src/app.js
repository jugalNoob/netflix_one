const express = require("express");
const bcrypt = require('bcrypt');

const path = require("path")
require("./db/conn")

const Register = require("./models/register");
const { readSync } = require("fs");

const app = express();


const port = process.env.PORT || 8000;


const statices = path.join(__dirname, "../public")

const tempalte = path.join(__dirname, "../template")




app.use(express.json())

app.use(express.urlencoded({ extended: false }))




app.use(express.static(statices))


app.set("view engine", "hbs")


app.set("views", tempalte)




app.get("/", (req, res) => {




    res.render("index")

})




//page is frontend page  start row class

//resgister time strt line row





app.get("/register", (req, res) => {




    res.render("register")

})




app.post("/register", async(req, res) => {



    try {



        const netflixdata = new Register({


            fname: req.body.fname,
            email: req.body.email,
            password: req.body.password



        })


        const netflix = await netflixdata.save();





        res.status(201).render("page")


    } catch (err) {



        res.status(400).send(err)


    }




})













//login time start




app.get("/login", (req, res) => {




    res.render("login")

})






app.post("/login", async(req, res) => {



    try {



        const email = req.body.email;

        const password = req.body.password;


        const useremail = await Register.findOne({ email: email })

        if (useremail.password == password) {




            res.status(201).render("page")
        } else {


            res.send("invalid user inormation")
        }


    } catch (err) {

        res.status(400).send(err)


    }



})


//page line start class




app.listen(port, "127.0.0.1", () => {



    console.log("this is port number" + port)

})