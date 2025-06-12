// Layout.jsx
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./CartDrawer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <div className="bg-pink-200">
      <Navbar setCartOpen={setCartOpen} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
      <Outlet context={{ setCartOpen }} />
      <Footer />
    </div>
  );
};

export default Layout;
