import React from "react";
import { CheckoutAction, CheckoutContextType } from "../types";

type Props = { children: React.ReactNode };

const initialState: CheckoutContextType = { modalOpen: false };

const reducer = (state: CheckoutContextType, action: CheckoutAction) => {
  switch (action.type) {
    case "CLOSE_CHECKOUT_MODAL":
      return { ...state, modalOpen: false };
    case "TOGGLE_CHECKOUT_MODAL":
      return { ...state, modalOpen: !state.modalOpen };
    default:
      return state;
  }
};

export const CheckoutContext = React.createContext<{
  state: CheckoutContextType;
  dispatch: React.Dispatch<CheckoutAction>;
}>({ state: initialState, dispatch: () => null });

const CheckoutProvider = (props: Props) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<CheckoutContextType, CheckoutAction>
  >(reducer, initialState);

  return (
    <CheckoutContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
