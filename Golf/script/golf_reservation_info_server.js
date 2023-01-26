// (A) LOAD REQUIRED MODULES
// npm i express nodemailer body-parser multer
const express = require("express"),
    bodyParser = require("body-parser"),
    nodemailer = require("nodemailer"),
    multer = require("multer"),
    path = require("path");

// (B) SETTINGS - CHANGE TO YOUR OWN!
// https://nodemailer.com/
const portHTTP = 80,
    mailSet = {
        port: 25,
        host: "localhost",
        /* auth: {
        user: EMAIL/USER,
        pass: PASSWORD
        },*/
        tls: { rejectUnauthorized: false }
    },
    mailFrom = "sys@mail.com",
    mailAdmin = "manager@mail.com",
    mailSubject = "Reservation",
    mailTxt = "Booking request received.";

// (C) NODE MAILER & EXPRESS SERVER
const app = express(),
    forms = multer();
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(forms.array());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mailtransport = nodemailer.createTransport(mailSet);

// (D) EXPRESS HANDLERS
// (D1) HOME PAGE - BOOKING FORM
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "1-booking.html")));

// (D2) SEND BOOKING REQUEST VIA EMAIL
app.post("/book", (req, res) => {
    // (D2-1) MAIL MESSAGE
    let msg = mailTxt + "<br>";
    for (const [k, v] of Object.entries(req.body)) { msg += `${k} : ${v}<br>`; }

    // (D2-2) SEND
    mailtransport.sendMail({
        from: mailFrom,
        to: mailAdmin,
        subject: mailSubject,
        html: `<p>${msg}</p>`
    }, (error, info) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log(req.body);
            res.sendStatus(200);
        }
    });
});

// (D3) THANK YOU
app.get("/thankyou", (req, res) => res.sendFile(path.join(__dirname, "2-thank-you.html")));

// (E) START!
app.listen(portHTTP);