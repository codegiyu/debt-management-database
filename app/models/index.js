const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.Promise = global.Promise;

const db = {}

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.bond = require("./bond.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;