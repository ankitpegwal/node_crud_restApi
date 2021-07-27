const mongoose = require('mongoose')
const CategorySchema =new mongoose.Schema({
    categoryId:{
        type:Date,
        default:Date.now()

    },
    categoryName:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Category",CategorySchema)