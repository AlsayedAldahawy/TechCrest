import express from 'express'
import mongoose from 'mongoose'
//import usersRoutes from './routes/userRoutes'
import laptopRoute from './routes/laptopRoute'
import wearableRoute from './routes/wearableRoute'
import accessoryRoute from './routes/accessoryRoute'
import gamingRoute from './routes/gamingRoute'
import mobileRoute from './routes/mobileRoute'
import tabletRoute from './routes/tabletRoute'
//import orderRoutes from './routes/OrderRoutes'
//import contactRoute from './routes/contactRoute'


import dotenv from 'dotenv'
import cors from 'cors';
import { seedInitialLaptops } from './services/laptopService'
import { seedInitialAccessories } from './services/accessoryService'
import { seedInitialGaming } from './services/gamingService'
import { seedInitialMobiles } from './services/mobileService'
import { seedInitialTablets } from './services/tabletService'
import { seedInitialWearable } from './services/wearableService'
import { seedInitialProducts } from './services/productsService'
import productRoute from './routes/productRoute'

dotenv.config()

const app = express()
const port = 5000;

app.use(express.json())
app.use(cors());


mongoose
    .connect('mongodb://localhost:27017/TechCrest')
    .then(() => console.log('Mongo Connected Successfully!'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));

//app.use('/users', usersRoutes);
//app.use('/confirm', orderRoutes)
//app.use('/contact', contactRoute);
app.use('/laptop', laptopRoute);
app.use('/mobile', mobileRoute);
app.use('/tablet', tabletRoute);
app.use('/accessory', accessoryRoute);
app.use('/gaming', gamingRoute);
app.use('/wearable', wearableRoute);
app.use('/products', productRoute);



seedInitialLaptops()
seedInitialGaming()
seedInitialMobiles()
seedInitialTablets()
seedInitialWearable()
seedInitialAccessories()
seedInitialProducts()





app.listen(port, () =>{
    console.log(`Server Is Running On Port ${port}`);
});