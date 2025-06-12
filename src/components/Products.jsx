import ProductCard from "../ProductCard";
import useProducts from "../hooks/useProducts";

const Products = ({ setCartOpen, product }) => {
  const [products, isLoading, isError] = useProducts({
    categoryId: product?.category?._id,
    excludeId: product?._id,
  });

  if (isLoading)
    return (
      <div className="text-center py-10">
        <p className="text-pink-600 font-medium">Loading products...</p>
      </div>
    );

  if (isError)
    return (
      <div className="text-center py-10">
        <p className="text-red-600 font-medium">Error fetching products.</p>
      </div>
    );

  return (
    <div className="mt-10 container2">
      <h2 className="text-xl md:text-4xl font-semibold mb-10 text-pink-700 text-center">
        All Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setCartOpen={setCartOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
