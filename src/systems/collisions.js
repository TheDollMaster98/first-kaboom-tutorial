import k from "../kaboom";
import { getScore } from "./score";

// Funzione per gestire le collisioni del personaggio
export function addCollisions(player) {
  player.onCollide("tree", () => {
    k.go("lose", getScore());
    k.burp();
    k.addKaboom(player.pos);
  });
}
