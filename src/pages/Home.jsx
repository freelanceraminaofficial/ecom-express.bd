import Products from "../components/Products";
import Hero from "../components/Hero";
import Support from "../components/Support";
// inside Home.jsx
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { setCartOpen } = useOutletContext();
  return (
    <>
      <Hero />
      <Products setCartOpen={setCartOpen} />
      <Support />
    </>
  );
};

export default Home;
