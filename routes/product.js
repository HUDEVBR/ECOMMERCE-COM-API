const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
    
})


module.exports = router;