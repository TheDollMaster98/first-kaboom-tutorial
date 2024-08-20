import k from "../../kaboom";
import { map1 } from "./game1Maps";

export function game1() {
  // Definisci la scena game1
  k.scene("game1", () => {
    map1();
  });
}
