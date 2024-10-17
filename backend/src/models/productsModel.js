import  mongoose, { Schema } from 'mongoose'


const productsSchema = new Schema({
    title: { type: String, required: true},
    image1: { type: String, required: true},
    image2: { type: String, required: true},
    image3: { type: String, required: true},
    details: { type: String, required: true},
    price: { type: Number, required: true},
    stock: { type: Number, required: true, default: 0 },
    brand: {type: String, required: false},
    ram: { type: String, required: false},
    type: { type: String, required: false},
})

const productsModel = mongoose.model('products', productsSchema)
export default productsModel;