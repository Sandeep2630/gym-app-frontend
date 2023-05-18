import { useContext } from "react";
import { Context } from "../../context/RootContext";

export function useRootContext(){

const appContext = useContext(Context)
return appContext;
}