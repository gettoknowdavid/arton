import React, { ReactNode } from "react";
import { GlobalType } from "../types";

type Props = {
  children: ReactNode;
};

export const GlobalContext: React.Context<GlobalType> =
  React.createContext<GlobalType>({
    drawerOpen: false,
    toggleDrawer: () => {},
    closeDrawer: () => {},
  });

const GlobalProvider = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const value: GlobalType = React.useMemo<GlobalType>(
    () => ({
      drawerOpen: isOpen,
      toggleDrawer,
      closeDrawer: () => setIsOpen(false),
    }),
    [isOpen, toggleDrawer]
  );

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
