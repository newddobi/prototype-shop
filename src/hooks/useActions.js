import { useContext } from "react";
import AppstateContext from "../contexts/AppStateContext";

export default function useActions() {
  const { addToOrder, remove, removeAll } = useContext(AppstateContext);

  return { addToOrder, remove, removeAll };
}
