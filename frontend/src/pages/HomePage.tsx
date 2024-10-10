import BrandShowcase from "../components/BrandShowCase";
import HotDeal from "../components/HotDeals";
import TopSellingProducts from "../components/topSelling";


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