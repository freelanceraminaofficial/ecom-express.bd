import { FaTrash } from "react-icons/fa6";
import useCartActions from "../../hooks/useCartActions";

const OrderCard = ({ cart }) => {
  const { handlePlusQuantity, handleMinusQuantity, handleDelete } =
    useCartActions();
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4 mt-4">
        <img
          src={cart.image}
          alt="Product"
          className="w-20 h-28 object-cover"
        />
        <div>
          <h3 className="text-pink-800 font-semibold">{cart.name}</h3>
          <p className="line-through text-sm text-gray-500">৳ {cart.price}</p>
          <p className="text-pink-600 font-bold">৳ {cart.price}</p>
          <p className="text-pink-700 font-semibold">= ৳ {cart.total}</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => handlePlusQuantity(cart)}
          className="border-1 border-gray-200 px-2 text-lg"
        >
          +
        </button>
        <span className="px-2">{cart.quantity}</span>
        <button
          onClick={() => handleMinusQuantity(cart)}
          className="border-1 border-gray-200 px-2 text-lg"
        >
          -
        </button>
        <button
          className=" text-red-500 hover:text-red-700 ml-4"
          onClick={() => handleDelete(cart._id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
