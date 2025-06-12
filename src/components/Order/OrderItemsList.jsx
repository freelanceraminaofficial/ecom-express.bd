import OrderCard from "./OrderCard";

export default function OrderItemsList({ cartItems }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-bold bg-pink-600 text-white p-2 rounded-lg">
        Shopping Items
      </h2>
      {cartItems.map((cart) => (
        <OrderCard key={cart._id} cart={cart} />
      ))}
    </div>
  );
}
