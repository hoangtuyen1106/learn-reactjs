import { createContext, useState } from "react";

const UserProgressContext = createContext({
  process: "", //cart, checkout
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export const UserProgressContextProvide = ({ children }) => {
  const [userProgress, setUserProgess] = useState("");

  const showCart = () => {
    setUserProgess("cart");
  };
  const hideCart = () => {
    setUserProgess("");
  };

  const showCheckout = () => {
    setUserProgess("checkout");
  };

  const hideCheckout = () => {
    setUserProgess("");
  };

  const userProcessCtx = {
    process: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProcessCtx}>
      {children}
    </UserProgressContext.Provider>
  );
};

export default UserProgressContext;
