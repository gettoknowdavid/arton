import { RootDispatch } from "../store";
import { useDispatch } from "react-redux";

export const useRootDispatch: () => RootDispatch = useDispatch;
