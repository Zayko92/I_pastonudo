const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
//inizializza express
var app = express();

const mongoose = require("mongoose")
mongoose.Promise = global.Promise;

//routes
require('./app/routes/autenticazioneRoutes.js')(app);
require('./app/routes/usercontentsRoutes.js')(app);
require('./app/routes/inventarioRoutes.js')(app);

var corsOptions = {
    origin: "http://localhost:8081"
};
var {DBURL, ipVersion} = require("./app/config/db.config.js")
var userModel = require("./app/models/usermodel.js")


////////////////////////////////////////// body
app.use(cors(corsOptions));


//cookies
app.use(
    cookieSession({
        name: "pastonudo-session",
        secret: "COOKIE_SECRET",
        httpOnly: true,
    })

);

//richiesta di index
app.get("/", (req, res) => {
    res.json({ message: "Benvenuto in PastoNudo™" });
});

// apertura del listener
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    connectMongo()
    console.log(DBURL)
    console.log(`Il server è in ascolto alla porta ${PORT}.`);

    //gestione della connessione userDb
    function connectMongo() {
        return mongoose.connect(DBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: ipVersion,
        }, (err) => {
            if (err) {
                setTimeout(() => {
                    connectMongo();
                }, 4000);

                console.error('Riprovando a connettere UserDb', err);
            } else {
                console.log('UserDb Connesso')
                createAdmin()
            }
        });
    }

//creazione automatica dell'admin se non esiste ancora
    function createAdmin(){
        userModel.estimatedDocumentCount((err, count) => {
            if (!err && count === 0) {
                new userModel({
                    id: 1,
                    username: "admin",
                    email: "admin@chainfornoobs.it",
                    password: "admin"
                }).save()
                console.log("creato report admin");
            }

        })
    }

});


