import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import useCart from "../../hooks/useCart";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const CartDrawer = ({ isOpen, onClose }) => {
  const [cartItems, refetch] = useCart();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  };

  const handlePlusQuantity = async (item) => {
    const updatedItem = {
      ...item,
      quantity: item.quantity + 1,
      total: (item.quantity + 1) * item.price,
    };
    await axiosPublic.patch(`carts/${item._id}`, updatedItem);
    refetch();
  };

  const handleMinusQuantity = async (item) => {
    if (item.quantity <= 1) return;
    const updatedItem = {
      ...item,
      quantity: item.quantity - 1,
      total: (item.quantity - 1) * item.price,
    };
    await axiosPublic.patch(`carts/${item._id}`, updatedItem);
    refetch();
  };

  const handleDelete = async (id) => {
    await axiosPublic.delete(`carts/${id}`);
    refetch();
  };

  const handleDeleteAll = async () => {
    await axiosPublic.delete("/carts");
    refetch();
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + (typeof item.total === "number" ? item.total : 0),
    0
  );

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-25 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        onClick={stopPropagation}
        className={`fixed top-0 right-0 h-full w-90 bg-pink-100 shadow z-50 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-zinc-300 flex justify-between items-center">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-xl font-bold p-2 hover:bg-gray-200 rounded-full text-gray-600"
          >
            <RxCross2 className="text-2xl text-black font-bold" />
          </button>
        </div>

        {/* Scrollable Cart Items */}
        <div className="overflow-y-auto px-4 py-2 flex-1 max-h-[calc(100vh-200px)]">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                onPlus={handlePlusQuantity}
                onMinus={handleMinusQuantity}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <CartFooter
          totalAmount={totalAmount}
          cartItems={cartItems}
          onClearAll={handleDeleteAll}
          onCheckout={handleClick}
        />
      </div>
    </>
  );
};

export default CartDrawer;
