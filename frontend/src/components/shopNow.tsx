import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';

interface Product {
  _id: number;
  title: string;
  price: number;
  image1: string; // Assuming your product has an image URL
}

interface Deal {
  title: string;
  discount: string; // Discount in percentage as a string (e.g., "50%")
}

const ShopNow = () => {
  const location = useLocation();
  const deal = location.state?.deal as Deal | null;
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);

  // Fetch products from an API or use a static array
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products'); // Replace with your API
        const data = await response.json();
        setProducts(data);
      } catch {
        setError(true);
      }
    };

    fetchProducts();
  }, []);

  // Function to calculate the discounted price
  const applyDiscount = (price: number, discount: string): number => {
    const discountPercentage = parseInt(discount);
    return price - (price * discountPercentage) / 100;
  };

  // Handle add to cart
  const handleAddToCart = (productId: number) => {
    // Logic to add the product to cart (e.g., API call or context state update)
    console.log(`Added product ${productId} to cart`);
  };

  // Handle add to wishlist
  //const handleAddToWishlist = (productId: number) => {
    // Logic to add the product to wishlist (e.g., API call or context state update)
  //  console.log(`Added product ${productId} to wishlist`);
  //};

  if (error) {
    return <div>Something went wrong, please try again!</div>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shop Now
      </Typography>
      {deal && (
        <Typography variant="h5" color="primary" gutterBottom>
          Today's Hot Deal: {deal.title}
        </Typography>
      )}

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Box
              sx={{
                margin: '20px',
                maxWidth: '320px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Card
                sx={{
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  border: '1px solid transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'border 0.3s ease',
                  '&:hover': {
                    border: '2px solid #D10024',
                  },
                }}
              >
                <Box className="product-img" sx={{ position: 'relative' }}>
                  <CardMedia
                    sx={{ height: 250, objectFit: 'contain' }}
                    image={product.image1}
                    title={product.title}
                    component="img"
                  />
                </Box>

                <CardContent
                  sx={{
                    padding: '15px',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="a"
                    href="#"
                    sx={{
                      textDecoration: 'none',
                      color: '#333',
                      fontWeight: 'bold',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {product.title}
                  </Typography>

                  <Typography color="textSecondary">
                    Original Price: {product.price.toFixed(2)}{' '} EGP
                    {deal && (
                      <span style={{ color: 'red' }}>
                        (After Discount: {applyDiscount(product.price, deal.discount).toFixed(2)} EGP)
                      </span>
                    )}
                  </Typography>

                  {deal && (
                    <Typography color="primary">
                      Discount: {deal.discount} off
                    </Typography>
                  )}

<Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            {[  
              { icon: <FavoriteBorderIcon fontSize="large" />, text: "add to wishlist" },
              { icon: <CompareArrowsIcon fontSize="large" />, text: "add to compare" },
              { icon: <VisibilityIcon fontSize="large" />, text: "quick view" },
            ].map(({ icon, text }, idx) => (
              <Box
                key={idx}
                sx={{
                  textAlign: "center",
                  position: "relative",
                  "&:hover .icon-text": { opacity: 1, transform: "translateY(0)" },
                  "&:hover .icon-button": { color: "#D10024" },
                }}
              >
                <Typography
                  className="icon-text"
                  variant="caption"
                  component="div"
                  sx={{
                    fontSize: "14px", // Increased font size for text
                    transition: "opacity 0.3s, transform 0.3s",
                    opacity: 0,
                    position: "absolute",
                    bottom: "100%", // Position text above the icon
                    left: "50%",
                    transform: "translate(-50%, -8px)", // Adjust the vertical position above the icon
                    whiteSpace: "nowrap", // Prevents text from wrapping
                    zIndex: 1, // Ensure text appears above other elements
                    backgroundColor: "black", // Black background
                    color: "white", // White text color
                    padding: "2px 5px", // Padding around the text
                    borderRadius: "4px", // Rounded corners for the background
                  }}
                >
                  {text}
                </Typography>
                <IconButton className="icon-button" sx={{ fontSize: "large" }}>
                  {icon}
                </IconButton>
              </Box>
            ))}
          </Box>
                </CardContent>
                <CardActions
          sx={{
            padding: "10px",
            backgroundColor: "#f8f8f8",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#D10024",
              fontWeight: "bold",
              borderRadius: "5px",
              width: "100%",
              "&:hover": { backgroundColor: "#a8001b" },
            }}
            startIcon={<ShoppingCartIcon />}
          >
            Add to Cart
          </Button>
        </CardActions>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShopNow;
