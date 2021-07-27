const express = require("express");
const router = express.Router();
const Products = require('../model/Product.js');


//All Products
router.get("/", async (req, res) => {
    try {
      const products = await Products.find().populate("categoryId");
      res.status(200).send(products);
    } catch (err) {
      res.status(500).send(err);
    }
  });

// find One Product

router.get("/:id",async (req,res)=>{
    try{
        const product = await Products.findOne({_id:req.params.id})
        res.status(200).send(product)
    } catch (err) {
        res.status(404).json({err:"Product does not exist"})
    }
  
})
// router.get("/product/:id",async (req,res)=>{
//     try{
//         const product = await Category.findOne({_id:req.params.id})
//         res.status(200).send(product)
//     } catch (err) {
//         res.status(404).json({err:"Product does not exist"})
//     }
    
// })
//Create Product
router.post("/create", async (req, res) => {
    try {
      const newProduct = new Products({
        productName: req.body.productName,
        qtyPerUnit: req.body.qtyPerUnit,
        unitPrice: req.body.unitPrice,
        unitInStock: req.body.unitInStock,
        discontinued: req.body.discontinued,
        categoryId: req.body.categoryId,
      });
      const product = await newProduct.save();
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// router.post("/create", async (req, res) => {
//     try {
//         const newProduct = new Products({
//             productName: req.body.productName,
//             qtyPerUnit: req.body.qtyPerUnit,
//             unitPrice: req.body.unitPrice,
//             unitInStock: req.body.unitInStock,
//             discontinued: req.body.discontinued,
//         })
//        const product=  await newProduct.save()
//         res.status(200).json(product)


    

//     } catch (err) {
//         res.status(500).json("err")
//     }
//     })

//Update Product Details
router.patch("/update/:id",async (req,res)=>{
    try{
        const product = await Products.findOne({ _id: req.params.id })
        if(req.body.productName){
            product.productName = req.body.productName
        }
        if(req.body.qtyPerUnit){
            product.qtyPerUnit = req.body.qtyPerUnit
        }
        if(req.body.unitPrice){
            product.unitPrice = req.body.unitPrice
        }
        if(req.body.unitInStock){
            product.unitInStock = req.body.unitInStock
        }
        if(req.body.discontinued){
            product.discontinued = req.body.discontinued
        }
        await product.save()
		res.status(200).send(product)

    }catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

//delete product

router.delete("/delete/:id", async (req,res)=>{
    try {
        await Products.deleteOne({ _id: req.params.id })
		res.status(204).json("Product deleted")
    } catch (error) {
        res.status(404)
		res.send({ error: "Product doesn't exist!" })
    }

})

module.exports = router;