const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const dbConfig = require("./app/config/db.config");
require("dotenv").config();

const app = express();

let corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const Role = db.role;
const Bond = db.bond;

db.mongoose.connect(
    `${process.env.mongoString}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("Successfully connected to MongoDB");
    initial();
}).catch(err => {
    console.error("Connection error", err);
    process.exit();
})

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) console.log("Error:", err);
                console.log("Added 'user' to roles collection")
            });
            
            new Role({
                name: "admin"
            }).save(err => {
                if (err) console.log("Error:", err);
                console.log("Added 'admin' to roles collection")
            });
            
            new Role({
                name: "moderator"
            }).save(err => {
                if (err) console.log("Error:", err);
                console.log("Added 'moderator' to roles collection")
            });
        }
    });

    Bond.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Bond({
                name: "730 days Savings Bond",
                type: "FGN Savings Bond",
                price: "300000",
                minimum: "5000",
                tax: "1.04",
                perYear: "11.382",
                interestPayment: "Quarterly",
                opening: "Oct/04/2022",
                closing: "Oct/07/2022",
                settlement: "Oct/12/2022",
                due: "October 12, 2024"
            }).save(err => {
                if (err) console.log("Error:", err);
                console.log("Added Bond 1 to bonds collection");
            });
            
            new Bond({
                name: "730 days Savings Bond",
                type: "FGN Savings Bond",
                price: "300000",
                minimum: "5000",
                tax: "1.04",
                perYear: "11.382",
                interestPayment: "Quarterly",
                opening: "Oct/04/2022",
                closing: "Oct/07/2022",
                settlement: "Oct/12/2022",
                due: "October 12, 2024"
            }).save(err => {
                if (err) console.log("Error:", err);
                console.log("Added Bond 2 to bonds collection");
            });
            
            new Bond({
                name: "730 days Savings Bond",
                type: "FGN Savings Bond",
                price: "300000",
                minimum: "5000",
                tax: "1.04",
                perYear: "11.382",
                interestPayment: "Quarterly",
                opening: "Oct/04/2022",
                closing: "Oct/07/2022",
                settlement: "Oct/12/2022",
                due: "October 12, 2024"
            }).save(err => {
                if (err) console.log("Error:", err);
                console.log("Added Bond 3 to bonds collection");
            });
            
            new Bond({
                name: "730 days Savings Bond",
                type: "FGN Savings Bond",
                price: "300000",
                minimum: "5000",
                tax: "1.04",
                perYear: "11.382",
                interestPayment: "Quarterly",
                opening: "Oct/04/2022",
                closing: "Oct/07/2022",
                settlement: "Oct/12/2022",
                due: "October 12, 2024"
            }).save(err => {
                if (err) console.log("Error:", err);
                console.log("Added Bond 4 to bonds collection");
            });
            
            new Bond({
                name: "730 days Savings Bond",
                type: "FGN Savings Bond",
                price: "300000",
                minimum: "5000",
                tax: "1.04",
                perYear: "11.382",
                interestPayment: "Quarterly",
                opening: "Oct/04/2022",
                closing: "Oct/07/2022",
                settlement: "Oct/12/2022",
                due: "October 12, 2024"
            }).save(err => {
                if (err) console.log("Error:", err);
                console.log("Added Bond 5 to bonds collection");
            });
            
            new Bond({
                name: "730 days Savings Bond",
                type: "FGN Savings Bond",
                price: "300000",
                minimum: "5000",
                tax: "1.04",
                perYear: "11.382",
                interestPayment: "Quarterly",
                opening: "Oct/04/2022",
                closing: "Oct/07/2022",
                settlement: "Oct/12/2022",
                due: "October 12, 2024"
            }).save(err => {
                if (err) console.log("Error:", err);
                console.log("Added Bond 6 to bonds collection");
            });
            
            new Bond({
                name: "730 days Savings Bond",
                type: "FGN Savings Bond",
                price: "300000",
                minimum: "5000",
                tax: "1.04",
                perYear: "11.382",
                interestPayment: "Quarterly",
                opening: "Oct/04/2022",
                closing: "Oct/07/2022",
                settlement: "Oct/12/2022",
                due: "October 12, 2024"
            }).save(err => {
                if (err) console.log("Error:", err);
                console.log("Added Bond 7 to bonds collection");
            });
            
            new Bond({
                name: "730 days Savings Bond",
                type: "FGN Savings Bond",
                price: "300000",
                minimum: "5000",
                tax: "1.04",
                perYear: "11.382",
                interestPayment: "Quarterly",
                opening: "Oct/04/2022",
                closing: "Oct/07/2022",
                settlement: "Oct/12/2022",
                due: "October 12, 2024"
            }).save(err => {
                if (err) console.log("Error:", err);
                console.log("Added Bond 8 to bonds collection");
            });
            
        }
    })
}

app.get("/", (req, res) => {
    res.send({ message: "DEBT MANAGEMENT database is online!" });
})

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/bond.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})