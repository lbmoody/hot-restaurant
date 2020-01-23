var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
    {
        "name": "Jackie Chan"
        , "id": "11111"
        , "phone": "303-123-4567"
        , "email": "j.chan@gmail.com"
    },
    {
        "name": "Tom Cruise"
        , "id": "22222"
        , "phone": "303-123-4567"
        , "email": "tcruisin@gmail.com"
    },
    {
        "name": "Sylvester Stalone"
        , "id": "33333"
        , "phone": "303-123-4567"
        , "email": "aadriiaannn@gmail.com"
    },
];

const tables = [
    {
        "name": "Dwayne Johnson"
        , "id": "00000"
        , "phone": "303-123-4567"
        , "email": "therock@gmail.com"
    },
];

// FRONT-END ROUTES_______________________________________

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// API ROUTES_____________________________________________
app.get("/api/reservations", function (req, res) {
    res.json(reservations);
});

app.get("/api/tables", function (req, res) {
    res.json(tables);
});

// POST CALL______________________________________________
app.post("/api/reservations", (req, res) => {
    const newReservation = req.body;
    if (tables.length <= 4) {
        tables.push(newReservation);
        res.json(newReservation);
    } else {
        reservations.push(newReservation);
        res.json(newReservation);
    }
})



// SERVER LISTEN_________________________________________
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});