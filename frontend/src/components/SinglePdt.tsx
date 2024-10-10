import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { fetchLaptopById } from '../api/LaptopApi'; // Assuming this function exists
import "../styles/Header.css"; // Link to your CSS file (optional)

const LaptopDetails: React.FC = () => {
    const { id } = useParams<{ id: string | undefined }>(); // Get the ID from the URL parameters
    const [laptop, setLaptop] = useState<any>(null); // Initialize with null to check if data is loaded
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const getLaptop = async () => {
            if (id) { // Ensure ID is defined
                const formattedId = `ObjectId('${id}')`; // Format the ID if needed
                const data = await fetchLaptopById(formattedId); // Fetch laptop from backend using the ID
                if (data) {
                    setLaptop(data); // Dynamically set the data from the backend
                }
            }
        };
        getLaptop();
    }, [id]); // Add id as a dependency

    if (!laptop) return <div>Loading...</div>; // Display loading state until data is available

    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    {/* Display the fetched dynamic data */}
                    <div className="col-md-5 col-md-push-2">
                        <div id="product-main-img">
                            <div className="product-preview">
                                <img src={laptop.image} alt={laptop.title} /> {/* Dynamic Image */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="product-details">
                            <h2 className="product-name">{laptop.title}</h2> {/* Dynamic Title */}
                            <div>
                                <h3 className="product-price">${(laptop.price * quantity).toFixed(2)}</h3> {/* Dynamic Price */}
                                <span className="product-available">In Stock</span>
                            </div>
                            <p>{laptop.details}</p> {/* Dynamic Details */}

                            <div className="add-to-cart">
                                <div className="qty-label">
                                    Qty
                                    <div className="input-number">
                                        <input
                                            type="number"
                                            min="1"
                                            value={quantity}
                                            onChange={(e) => setQuantity(parseInt(e.target.value, 10))} // Quantity change
                                        />
                                        <span className="qty-up" onClick={() => setQuantity(quantity + 1)}>+</span>
                                        <span className="qty-down" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</span>
                                    </div>
                                </div>
                                <button className="add-to-cart-btn">
                                    <i className="fa fa-shopping-cart"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaptopDetails;
