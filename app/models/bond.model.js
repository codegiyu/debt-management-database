const mongoose = require("mongoose");

const Bond = mongoose.model(
    "Bond",
    new mongoose.Schema({
        name: String,
        type: String,
        price: String,
        minimum: String,
        tax: String,
        perYear: String,
        interestPayment: String,
        opening: String,
        closing: String,
        settlement: String,
        due: String,
    })
)

module.exports = Bond