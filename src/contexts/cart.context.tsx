import React from "react";
import { CartAction, CartContextType } from "../types";
import { useLocalStorage } from "../hooks";

type Props = {
  children: React.ReactNode;
};

const initialState: CartContextType = {
  items: [],
  cartDrawerOpen: false,
};

const reducer = (state: CartContextType, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, size } = action.payload.item;

      let cartItems = null;

      const isOld = state.items.find(
        (item) => item.id === id && item.size.label === size.label
      );

      if (isOld) {
        const items = state.items.map((i) => {
          if (i.id === id) return { ...i, quantity: i.quantity + 1 };

          return i;
        });
        cartItems = [...items];
      } else {
        cartItems = [...state.items, action.payload.item];
      }

      return {
        ...state,
        items: cartItems,
      };

    case "CLEAR_CART":
      return { ...state, ...initialState };

    case "CLOSE_CART_DRAWER":
      return { ...state, cartDrawerOpen: false };

    case "DECREASE_QUANTITY":
      break;

    case "INCREASE_QUANTITY":
      break;

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload.id),
      };

    case "SELECT_SIZE":
      break;

    case "TOGGLE_CART_DRAWER":
      return { ...state, cartDrawerOpen: !state.cartDrawerOpen };
    default:
      return state;
  }
};

export const CartContext = React.createContext<{
  state: CartContextType;
  dispatch: React.Dispatch<CartAction>;
}>({ state: initialState, dispatch: () => null });

const CartProvider = (props: Props) => {
  const [persistedItems, setPersistedItems] = useLocalStorage("cart.items", []);

  const persistedState: CartContextType = {
    cartDrawerOpen: false,
    items: persistedItems || [],
  };

  const [state, dispatch] = React.useReducer<React.Reducer<any, any>>(
    reducer,
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

export default CartProvider;
