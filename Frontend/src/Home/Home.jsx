import { useEffect } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";
import Nav from "../components/Nav";
import Middle from "../components/Middle";
import Downloadapp from "../components/Downloadapp";
import OrderFlow from "../components/OrderFlow";
import MarketProfile from "../components/MarketProfile";

function Home() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light"); // Force DaisyUI light mode
  }, []);

  return (
    <>
      <Nav />
      <Banner />
      <Middle />
      <OrderFlow />
      <MarketProfile />
      <Downloadapp />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
