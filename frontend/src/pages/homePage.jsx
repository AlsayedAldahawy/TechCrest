import BrandShowcase from "../components/brandShowCase.jsx";
import HotDeal from "../components/hotDeals.jsx";
import TopSellingProducts from "../components/topSelling.jsx";
import React from 'react';



const HomePage = () => {
  return (
    <>
      < HotDeal />
      < TopSellingProducts />
      < BrandShowcase/>
    </>
  );
};

export default HomePage;