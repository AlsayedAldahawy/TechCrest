import  mongoose, { Schema } from 'mongoose'


const gamingSchema = new Schema({
    title: { type: String, required: true},
    image1: { type: String, required: true},
    image2: { type: String, required: true},
    image3: { type: String, required: true},
    details: { type: String, required: true},
    price: { type: Number, required: true},
    stock: { type: Number, required: true, default: 0 },
})

const gamingModel = mongoose.model('gaming', gamingSchema)
export default gamingModel;