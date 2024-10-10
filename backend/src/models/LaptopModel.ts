import  mongoose, { Schema, Document } from 'mongoose'

export interface ILaptop extends Document {
    image1: string;
    image2: string;
    image3: string;
    title: string;
    details: string;
    price: number;
    stock: number;
    brand: string;
    ram: string;
}

const laptopsSchema = new Schema<ILaptop>({
    title: { type: String, required: true},
    image1: { type: String, required: true},
    image2: { type: String, required: true},
    image3: { type: String, required: true},
    details: { type: String, required: true},
    price: { type: Number, required: true},
    stock: { type: Number, required: true, default: 0 },
    brand: {type: String, required: true},
    ram: { type: String, required: true},
})

const laptopsModel = mongoose.model<ILaptop>('laptops', laptopsSchema)
export default laptopsModel;