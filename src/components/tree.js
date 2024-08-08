import k from "../kaboom";
import { FLOOR_HEIGHT, SPEED } from "../const";

// Funzione per creare l'albero
export function createTree() {
  k.add([
    k.rect(48, k.rand(32, 96)), // Assegna un'altezza random
    k.area(),
    k.outline(4),
    k.pos(k.width(), k.height() - FLOOR_HEIGHT),
    k.anchor("botleft"),
    k.color(255, 180, 255),
    k.move(k.LEFT, SPEED),
    "tree", // Assegna un tag "tree" all'albero
  ]);
}
