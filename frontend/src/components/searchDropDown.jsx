import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box'; // Box for styling
import ImgMediaCard from './dropDownCard.jsx'; // Assuming ImgMediaCard accepts props for title, image, and description

const SearchDropdown = ({ searchTerm }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://64.227.119.208:5000/products'); // Adjust the API endpoint
        const data = await response.json();

        // Filter products based on the search term
        const results = data.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
        setDropdownVisible(results.length > 0); // Show dropdown if there are results
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (searchTerm) {
      fetchProducts();
    } else {
      setDropdownVisible(false); // Hide dropdown if searchTerm is empty
    }
  }, [searchTerm]);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false); // Close dropdown if click is outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Cleanup
    };
  }, []);

  return (
    <Box
      className="dropdown-results"
      ref={dropdownRef} // Attach ref to dropdown
      sx={{
        position: 'absolute',
        zIndex: 10,
        backgroundColor: '#fff',
        width: '100%',
        border: '1px solid #ddd', // Optional: add border for better visibility
        borderRadius: '4px', // Optional: rounded corners
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Add shadow for depth
        padding: '10px', // Add padding inside the dropdown
        display: dropdownVisible ? 'block' : 'none', // Show or hide based on state
      }}
    >
      {filteredProducts.length > 0 ? (
        <Box>
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product._id}`}
              key={product._id}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                marginBottom: '10px', // Space between items
              }}
            >
              <ImgMediaCard
                title={product.title}
                image={product.image1}
                description={`Price: ${product.price} EGP`}
              />
            </Link>
          ))}
        </Box>
      ) : (
        <Box sx={{ padding: '10px', textAlign: 'center' }}>No products found</Box>
      )}
    </Box>
  );
};

export default SearchDropdown;
