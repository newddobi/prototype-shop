import { useContext } from "react";
import AppstateContext from "../contexts/AppStateContext";

export default function useOrders() {
  const { orders } = useContext(AppstateContext);

  return orders;
}
