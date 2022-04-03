require("dotenv").config();

const { rejects } = require("assert");
const jwt = require("jsonwebtoken"); 

const verifyToken = (token) =>{
    return new Promise((resolve,reject)=>{
        var decode = jwt.verify(token, process.env.SECRET_KEY, function(err,decode){
            if(err){
                return reject(err);
            }
    
            return resolve(decode);
        });
    })
}

const authenticate = async (req,res,next)=>{
    if(!req.headers.authorization){
        return res.status(400).send({message : "Authorization token not found or incorrect"})
    }
    
    if(!req.headers.authorization.startsWith("Bearer ")){
        return res.status(400).send({message : "Authorization token not found or incorrect"})
    }
    
    const token = req.headers.authorization.trim().split(" ")[1];
    
    let decode;

    try{
        decode = await verifyToken(token);
        

    }
    catch(error){
        console.log(error)
        
        return res.status(500).send({error})
    }
    
    req.user = decode.user;

    return next();
}

module.exports = authenticate;