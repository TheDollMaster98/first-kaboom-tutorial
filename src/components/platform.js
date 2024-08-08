import k from "../kaboom";
import { FLOOR_HEIGHT } from "../const";

// Funzione per creare la piattaforma
export function createPlatform() {
  k.add([
    k.rect(k.width(), FLOOR_HEIGHT),
    k.outline(4),
    k.pos(0, k.height()),
    k.anchor("botleft"),
    k.area(),
    k.body({ isStatic: true }), // Rende la piattaforma statica
    k.color(127, 200, 255),
  ]);
}
