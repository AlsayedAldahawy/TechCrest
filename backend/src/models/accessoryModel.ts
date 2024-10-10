import  mongoose, { Schema, Document } from 'mongoose'

export interface IAccessories extends Document {
    image1: string;
    image2: string;
    image3: string;
    title: string;
    details: string;
    price: number;
    stock: number;
    brand: string;
}

const accessoriesSchema = new Schema<IAccessories>({
    title: { type: String, required: true},
    image1: { type: String, required: true},
    image2: { type: String, required: true},
    image3: { type: String, required: true},
    details: { type: String, required: true},
    price: { type: Number, required: true},
    stock: { type: Number, required: true, default: 0 },
    brand: { type: String, required: true},
})

const accessoriesModel = mongoose.model<IAccessories>('accessories', accessoriesSchema)
export default accessoriesModel;