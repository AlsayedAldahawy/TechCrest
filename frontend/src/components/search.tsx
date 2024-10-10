import React, { useState, useEffect } from 'react';

// Define Product type
interface Product {
  _id: number;
  title: string;
  price: number;
  image1: string;
}

interface SearchProps {
  searchTerm: string; // The search term passed from Header.tsx
}

const Search: React.FC<SearchProps> = ({ searchTerm }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products'); // Adjust to your API
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search term
  useEffect(() => {
    if (searchTerm) {
      const results = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]); // Clear the results if the search term is empty
    }
  }, [searchTerm, products]);

  // Conditionally render the search results only if there is a search term
  return (
    <div className="search-results container">
      {searchTerm && filteredProducts.length > 0 ? (
        <div className="row">
          {filteredProducts.map(product => (
            <div className="col-md-4" key={product._id}>
              <div className="product">
                <div className="product-img">
                  <img src={product.image1} alt={product.title} />
                </div>
                <div className="product-body">
                  <h3 className="product-name">{product.title}</h3>
                  <h4 className="product-price">{product.price} EGP</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        searchTerm && <p>No products found</p> // Display message if no results match
      )}
    </div>
  );
};

export default Search;
