const db = require("../models");
const Bond = db.bond;

exports.allBonds = (req, res) => {
    Bond.find({}, (err, bonds) => {
        if (err) {
            res.json({ error: err });
            return
        }

        res.json({ status: "Success", data: bonds });
        return
    })
}