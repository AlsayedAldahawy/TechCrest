import  mongoose, { Schema, Document } from 'mongoose'

export interface IProducts extends Document {
    image1: string;
    image2: string;
    image3: string;
    title: string;
    details: string;
    price: number;
    stock: number;
    brand: string;
    ram: string;
    type: string;
}

const productsSchema = new Schema<IProducts>({
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

const productsModel = mongoose.model<IProducts>('products', productsSchema)
export default productsModel;