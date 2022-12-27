const db = require("../models");
const Bond = db.bond;

exports.allBonds = (req, res) => {
    Bond.find({}, (err, bonds) => {
        if (err) {
            res.status(500).json({ error: err });
            return
        }

        res.status(200).json({ status: "Success", data: bonds });
        return
    })
}