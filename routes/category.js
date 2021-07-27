const express = require("express");
const router = express.Router();
const Category = require('../model/Category.js');

router.get("/", async (req, res) => {
    try{
        const category = await Category.find()
        res.status(200).send(category)
    }catch(err){
res.status(500).send(err)
    }
  
})
//create
router.post("/create", async (req, res) => {
    try {
        const newCategory = new Category({
            
            categoryName: req.body.categoryName
            
        })
       const category=  await newCategory.save()
        res.status(200).json(category)

    } catch (err) {
        res.status(500).json(err)
    }
    })
    //update
    router.patch("/update/:id",)

    module.exports = router;