import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { cart, removeFromChart } = useCart();
  const itemcount = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);
  return (
    <header className="bg-White shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600"> Shop Mart</h1>
      <div className="relative">
        <button
          className="cursor"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaShoppingCart className="text-2xl text-gray-700" />
          {itemcount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sx w-5 h-5 flex item-center justify-center rounded-full">
              {itemcount}
            </span>
          )}
        </button>
        {showDropdown && (
          <div
            className="absolute right-0 mt-2 w-80 bg-white
             border rounded shadow-lg z-50"
          >
            <div className="p-4">
              <h2 className="font-semibold"> Cart Items</h2>
              <h2 className="font-semibold text-lg mb-2">
                {cart.length === 0 ? (
                  <p className="test-gray-500 text-sm">Cart is empty</p>
                ) : (
                  <>
                    <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                      {cart.map((item) => (
                        <li
                          key={item.id}
                          className="flex justify-between item-center py-2"
                        >
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-gray">
                              {item.qty}*{item.price}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromChart(item.id)}
                            className="text-sm text-red-500 hover:underline"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-betwnn font-semibold">
                      <span>Total:</span> <span>{total}</span>
                    </div>
                  </>
                )}
              </h2>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
