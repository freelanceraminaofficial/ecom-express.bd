// hooks/useCartActions.js
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";
import useCart from "./useCart";

export default function useCartActions() {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [, refetch] = useCart();

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

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return {
    handleClick,
    handlePlusQuantity,
    handleMinusQuantity,
    handleDelete,
    handleDeleteAll,
    stopPropagation,
  };
}
