import { RootState } from "../store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;
