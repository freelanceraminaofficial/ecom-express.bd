import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = ({ categoryId, excludeId } = {}) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", categoryId, excludeId],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      let filtered = res?.data?.data || [];

      if (categoryId) {
        filtered = filtered.filter(
          (p) => p.category?._id === categoryId && p._id !== excludeId
        );
      }

      return filtered;
    },
  });

  return [products, isLoading, isError];
};

export default useProducts;
