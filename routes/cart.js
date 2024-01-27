const Cart = require("../models/Cart");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE - Função para cadastrar produtos

router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE - Função para atualizar produtos

router.post("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE - Função para deletar produtos

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...")
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER CART - Função para lista produto específico

router.get("/find/:userId", async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id)
        res.status(200).json(Cart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// //GET ALL CartS - Função para listar todos os produtos

// router.get("/", async (req, res) => {
//     const qNew = req.query.new;
//     const qCategory = req.query.category;
//     try {
//         let Carts;

//         if (qNew) {
//             Carts = await Cart.find().sort({ createdAt: - 1 }).limit(5);
//         } else if (qCategory) {
//             Carts = await Cart.find({
//                 categories: {
//                     $in: [qCategory],
//                 },
//             });
//         } else {
//             Carts = await Cart.find();
//         }
            
//         res.status(200).json(Carts);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;