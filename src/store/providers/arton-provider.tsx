import React, { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "../index";

type Props = {
  children: ReactNode;
};

function ArtonProvider(props: Props) {
  const persistor = persistStore(store);

  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>{props.children}</PersistGate>
    </ReduxProvider>
  );
}

export default ArtonProvider;
