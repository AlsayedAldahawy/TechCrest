import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ProductsPage from "./pages/ProductsPage";
import SignUp from "./pages/SignupPage";
import Login from "./pages/LoginPage";
import Cart from "./pages/CartPage";
import WishList from "./pages/WishlistPage";
import BrandProducts from "./components/fetchEachBrand"; // Renamed the import to match the comment
import LaptopPage from "./components/LaptopPdts";
import MobilePage from "./components/mobilePdts";
import TabletPage from "./components/tabletPdts";
import GamingPage from "./components/gamingPdts";
import AccessoriesPage from "./components/accessoryPdts";
import WearablePage from "./components/wearablePdts";
import ShopNow from "./components/shopNow";
import TopSellingProducts from "./components/topSelling";
import SearchResults from "./components/SearchResults";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="services" element={<Services />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="laptop" element={< LaptopPage />} />
          <Route path="mobile" element={< MobilePage />} />
          <Route path="tablet" element={< TabletPage />} />
          <Route path="gaming" element={< GamingPage />} />
          <Route path="wearable" element={< WearablePage />} />
          <Route path="accessory" element={< AccessoriesPage />} />
          <Route path="/shopnow" element={< ShopNow />} />
          <Route path="topselling" element={< TopSellingProducts />} />
          <Route path="/search" element={<SearchResults />} />


          <Route path="products/:brandName" element={<BrandProducts />} /> {/* Dynamic route */}

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
