import { useLocalStorage } from "../../hooks";
import { CartContextType } from "../../types";
import React from "react";
import { CartContext, cartReducer } from "./cart.context";

type Props = {
  children: React.ReactNode;
};

export const CartProvider = (props: Props) => {
  const [persistedItems, setPersistedItems] = useLocalStorage("cart.items", []);

  const persistedState: CartContextType = {
    cartDrawerOpen: false,
    items: persistedItems || [],
  };

  const [state, dispatch] = React.useReducer<React.Reducer<any, any>>(
    cartReducer,
    persistedState
  );

  React.useEffect(() => {
    setPersistedItems(state.items);
  }, [setPersistedItems, state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
