const jwt = require("jsonwebtoken");

function authenicateToken(req,res,next){
    const authHeader = req.headers["autorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user)=>{
        if(err) return res.sendStatus(403).send("Accesss token expired");
        req.user = user;
        next();
    });
}
module.exports = authenicateToken;