import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProductCard from "../components/productCard.jsx";
import { Box } from "@mui/material";

const TopSellingProducts = () => {
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://64.227.119.208:5000/products'); // Replace with your API endpoint
        const data = await response.json();
        
        // Select 10 random products on every fetch
        const randomProducts = selectRandomProducts(data, 10);
        setTopSellingProducts(randomProducts);
      } catch {
        setError(true);
      }
    };

    fetchProducts();
  }, []); // The empty dependency array ensures this only runs once, on initial page load.

  // Function to select n random products from the list
  const selectRandomProducts = (products, n) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, n); // Return first n elements
  };

  if (error) {
    return <Box>Something went wrong, please try again!</Box>;
  }

  return (
    <Container sx={{ mt: 2 }}>
      <h2>Top Selling Products</h2>
      <Grid container spacing={8}>
        {topSellingProducts.map((product) => (
          <Grid item md={4} key={product._id}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopSellingProducts;
