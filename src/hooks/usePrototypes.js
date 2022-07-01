import { useContext } from "react";
import AppstateContext from "../contexts/AppStateContext";

export default function usePrototypes() {
  const { prototypes } = useContext(AppstateContext);

  return prototypes;
}
