import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProductCard from "../components/productCard.jsx";
import { Box } from "@mui/material";

const BrandProducts = () => {
  const { brandName } = useParams(); // Removed type annotation
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products"); // Replace with the correct API URL
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        const data = await response.json();

        const filteredProducts = data.filter(
          (product) => product.brand && product.brand.toLowerCase() === brandName.toLowerCase()
        );

        setProducts(filteredProducts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [brandName]);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>{error}</Box>;
  }

  return (
    <Container sx={{ mt: 2 }}>
      <h1>{brandName} Products</h1>
      <Grid container spacing={8}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item md={4} key={product._id}>
              <ProductCard
                image1={product.image1}
                title={product.title}
                price={product.price}
              />
            </Grid>
          ))
        ) : (
          <p>No products found for {brandName}.</p>
        )}
      </Grid>
    </Container>
  );
};

export default BrandProducts;
