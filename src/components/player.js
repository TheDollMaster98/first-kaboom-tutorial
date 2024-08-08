import k from "../kaboom";
import { JUMP_FORCE } from "../const";

// Funzione per creare il player
export function createPlayer() {
  const player = k.add([
    k.sprite("bean"),
    k.pos(80, 40),
    k.area(),
    k.body(), // Rende il personaggio soggetto alla gravità
    "player", // Assegna un tag "player" al personaggio
  ]);

  return player;
}

export function jump(player) {
  if (player.isGrounded()) {
    player.jump(JUMP_FORCE);
  }
}
