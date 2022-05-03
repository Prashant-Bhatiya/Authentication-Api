const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/authenticate")

const Product = require("../models/product.model");
const { Login } = require("./auth.controller");

router.post("", authenticate ,async (req,res) =>{
    console.log(req);
    req.body.userid = req.user._id
    try {
        const product = await Product.create(req.body);
    
        return res.status(200).send({product})
    } catch (error) {
        console.log(error)
        
        return res.status(500).send({message : error.message});
    }
})

module.exports = router;
