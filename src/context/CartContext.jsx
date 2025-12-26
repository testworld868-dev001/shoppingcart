import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });
  const removeFromChart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromChart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
