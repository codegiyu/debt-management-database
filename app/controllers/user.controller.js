exports.allAccess = (req, res) => {
    res.json({  message: "Public Content." });
};

exports.userBoard = (req, res) => {
    res.json({  message: "User Content." });
};

exports.moderatorBoard = (req, res) => {
    res.json({  message: "Moderator Content." });
};

exports.adminBoard = (req, res) => {
    res.json({  message: "Admin Content." });
};