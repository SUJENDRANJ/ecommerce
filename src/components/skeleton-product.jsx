const SkeletonProduct = () => {
  return (
    <div className="products__single animate-pulse border-2 border-gray-200">
      <div className="w-full h-[65%] bg-gray-200 mb-[3px] rounded-sm"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 mt-1"></div>
      <hr className="my-2 border-gray-200" />
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
      <div className="flex gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-5 h-5 bg-gray-200 rounded-full"></div>
        ))}
      </div>
      <div className="h-8 bg-gray-200 rounded w-24 mt-2"></div>
    </div>
  );
};

export default SkeletonProduct;
