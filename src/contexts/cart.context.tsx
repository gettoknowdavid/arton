import React from "react";
import { CartAction, CartContextType, CartItemInterface } from "../types";
import { useLocalStorage } from "../hooks";

type Props = {
  children: React.ReactNode;
};

const initialState: CartContextType = {
  items: [],
  cartDrawerOpen: false,
};

export const totalAmount = (state: CartContextType): number =>
  state.items.reduce((cartTotal: number, currentItem: CartItemInterface) => {
    const { price, quantity } = currentItem;
    cartTotal += price * quantity;
    return cartTotal;
  }, 0);

const reducer = (state: CartContextType, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, size } = action.payload.item;

      let cartItems = null;

      const isOld = state.items.find(
        (item) => item.id === id && item.size.id === size.id
      );

      if (isOld) {
        const items = state.items.map((i) => {
          if (i.id === id && i.size.id === size.id) {
            return { ...i, quantity: i.quantity + 1 };
          }

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
      return { ...state, items: initialState.items };

    case "CLOSE_CART_DRAWER":
      return { ...state, cartDrawerOpen: false };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((i) => {
            if (i.id === action.payload.id) {
              return { ...i, quantity: i.quantity - 1 };
            }
            return i;
          })
          .filter((i) => i.quantity > 0),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.id === action.payload.id) {
            return { ...i, quantity: i.quantity + 1 };
          }
          return i;
        }),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          (i) =>
            i.id !== action.payload.item.id ||
            i.size.id !== action.payload.item.size.id
        ),
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
