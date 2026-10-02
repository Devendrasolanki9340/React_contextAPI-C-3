import { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const Card = () => {

  let {CartItems} = useContext(MyShop)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {CartItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
        >
          {/* Product Image */}
          <div className="h-60 bg-gray-100 flex items-center justify-center p-4">
            <img
              src={item.image}
              alt={item.title}
              className="h-full object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="p-4">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
              {item.category}
            </span>

            <h2 className="mt-3 text-lg font-semibold line-clamp-2">
              {item.title}
            </h2>

            <p className="mt-2 text-gray-600 text-sm line-clamp-3">
              {item.description}
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-green-600">
                ${item.price}
              </span>

              <span className="text-yellow-500">
                ⭐ {item.rating.rate}
              </span>
            </div>

            <p className="text-gray-500 text-sm mt-1">
              {item.rating.count} Reviews
            </p>

            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;