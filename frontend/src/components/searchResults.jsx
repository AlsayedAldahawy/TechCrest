import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ProductCard from '../components/productCard.jsx'; // Make sure you have this component
import { Box } from '@mui/material';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation(); // Get the current URL location

  // Extract the search term from the query parameters
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://64.227.119.208:5000/products'); // Adjust the API endpoint
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (query) {
      const results = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [query, products]);

  return (
    <Container sx={{ mt: 2, mb: 4 }}>
      <h2>Search Results for "{query}"</h2>
      <Grid container spacing={4}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Grid item md={4} key={product._id}>
              <ProductCard 
                _id={product._id}
                title={product.title}
                price={product.price}
                image1={product.image1} 
                type={''} // If `type` is not required, this can be removed or passed as empty
              />
            </Grid>
          ))
        ) : (
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <p>No products found.</p>
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default SearchResults;
