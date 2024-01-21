const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
    
})

// //UPDATE
// router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
//     if (req.body.password) {
//         req.body.password = CryptoJS.AES.encrypt(
//             req.body.password,
//             process.env.PASS_SEC
//         ).toString();
//     }

//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(
//             req.params.id,
//             {
//                 $set: req.body,

//CREATE

router.post("/", async (req, res) => {
    
})
//             },
//             { new: true }
//         );
//         res.status(200).json(updatedProduct);
//     } catch (err) {
//         res.status(500).json(err);
//     }

//CREATE

router.post("/", async (req, res) => {
    
})
// });

// //DELETE
// router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
//     try {
//         await Product.findByIdAndDelete(req.params.id)
//         res.status(200).json("Product has been deleted...")
//     } catch (err) {
//         res.status(500).json(err);

//CREATE

router.post("/", async (req, res) => {
    
})
//     }

//CREATE

router.post("/", async (req, res) => {
    
})
// });

// //GET Product
// router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
//     try {
//         const Product = await Product.findById(req.params.id)

//CREATE

router.post("/", async (req, res) => {
    
})
//         const { password, ...others } = Product._doc;
//         res.status(200).json(others);
//     } catch (err) {

//CREATE

router.post("/", async (req, res) => {
    
})
//         res.status(500).json(err);

//CREATE

router.post("/", async (req, res) => {
    
})
//     }
// });

// //GET ALL ProductS
// router.get("/", verifyTokenAndAdmin, async (req, res) => {
//     const query = req.query.new
//     try {

//CREATE

router.post("/", async (req, res) => {
    
})
//         const Product = query
//             ? await Product.find().sort({ _id: -1 }).limit(5)
//             : await Product.find();
//         res.status(200).json(Product);

//CREATE

router.post("/", async (req, res) => {
    
})
//     } catch (err) {

//CREATE

router.post("/", async (req, res) => {
    
})
//         res.status(500).json(err);

//CREATE

router.post("/", async (req, res) => {
    
})
//     }

//CREATE

router.post("/", async (req, res) => {
    
})
// });

// //GET Product  STATS

// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//     const date = new Date();

//CREATE

router.post("/", async (req, res) => {
    
})
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//     try {
//         const data = await Product.aggregate([
//             { $match: { createdAt: { $gte: lastYear } } },
//             {
//                 $project: {

//CREATE

router.post("/", async (req, res) => {
    
})
//                     month: { $month: "$createdAt" },
//                 },
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: 1 },
//                 },
//             },
//         ]);
//         res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;