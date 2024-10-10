import AccessoriesPage from "../components/accessoryPdts"
import GamingPage from "../components/gamingPdts"
import LaptopPage from "../components/LaptopPdts"
import MobilePage from "../components/mobilePdts"
import TabletPage from "../components/tabletPdts"
import WearablePage from "../components/wearablePdts"

const allProducts = () => {
    return (
      <>
        < LaptopPage />
        < MobilePage />
        < TabletPage />
        < AccessoriesPage />
        < WearablePage />
        < GamingPage />
      </>
    );
  };
  
  export default allProducts;