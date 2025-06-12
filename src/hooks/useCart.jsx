import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const axiosPublic = useAxiosPublic();

  const { data: cartItems = [], refetch } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const res = await axiosPublic.get("/carts");
      return res.data.data;
    },
  });
  return [cartItems, refetch];
};

export default useCart;
