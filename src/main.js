import k from "./kaboom";
import { game0 } from "./games/game0/game0";
import { game1 } from "./games/game1/game1";
import { loadSprite } from "./systems/laodSprite";

// carico gli sprite
loadSprite();

// game0
game0();
// game1
game1();

// Vai alla scena di gioco iniziale
k.go("game0");
