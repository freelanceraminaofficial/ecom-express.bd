import { FaTrash } from "react-icons/fa";

const CartItem = ({ item, onPlus, onMinus, onDelete }) => {
  return (
    <div
      key={item._id}
      className="flex gap-3 items-center border-b border-pink-200 pb-3 relative mb-3"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-[100px] h-[120px] object-cover rounded"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-md text-rose-600 line-clamp-1">
          {item.name}
        </h3>
        <p className="text-lg text-gray-500 line-through">৳ {item.price}</p>
        <p className="text-md text-pink-700">৳ {item.price}</p>

        <div className="flex items-center justify-between mt-1 text-lg">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onMinus(item)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-2">{item.quantity}</span>
            <button
              onClick={() => onPlus(item)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
          <p className="font-bold text-pink-600">৳ {item.total}</p>
        </div>
      </div>

      <button
        onClick={() => onDelete(item._id)}
        className="absolute top-1 right-1 text-red-500 hover:text-red-700"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
