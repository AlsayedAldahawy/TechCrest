import { useState, useContext, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from './tools/CartContext';

const LaptopService = ({ data }) => {
    const { title, image, details, _id: id, price } = data;  // Laptop data structure
    
    const { addToCart } = useContext(CartContext);  // Get the addToCart function from CartContext

    const [quantity, setQuantity] = useState(1);
    const [currentPrice, setCurrentPrice] = useState(price || 0);  // Set the base price from the laptop data

    // Handle changes in the quantity
    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value, 10));
    };

    // Handle adding the laptop to the cart
    const handleAddToCart = () => {
        addToCart({ id, title, quantity, price: currentPrice * quantity, itemType: 'Laptop' });
    };

    return (
        <div className="hover:shadow-lg transition-all duration-700 lg:p-5 p-[20px] w-[100%] rounded-3xl">
            <div className="overflow-hidden rounded-3xl">
                <img className="hover:scale-125 hover:opacity-75 transition-all duration-700" 
                     src={image} 
                     alt={title} 
                     style={{ width: '345px', height: '240px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="text-xl font-semibold my-4">{title}</h2>
            <p>{details}</p>
            <div className="flex items-center space-x-4">
                <select 
                    className="m-2 h-100 select-orange" 
                    value={quantity} 
                    onChange={handleQuantityChange}
                >
                    {[...Array(6).keys()].map(i => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
                <div className="d-inline h-100 fs-6">
                    Total Price: ${(currentPrice * quantity).toFixed(2)}
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <button 
                    className="flex items-center px-[20px] py-[2px]"
                    onClick={handleAddToCart}
                >
                    Add To Cart <FaShoppingCart className="ml-[16px]" />
                </button>
            </div>
        </div>
    );
};

export default LaptopService;
