import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import OrderForm from "./pages/OrderForm";
import OrderConfirm from "./pages/OrderConfirm";
import Collection from "./pages/Collection";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<OrderForm />} />
        <Route path="/thankyou" element={<OrderConfirm />} />
        <Route path="/collections" element={<Collection />} />
      </Route>
    </Routes>
  );
};

export default App;
