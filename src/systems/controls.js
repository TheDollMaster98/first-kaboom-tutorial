import k from "../kaboom";

// Funzione per gestire i controlli del personaggio
export function addControls(player) {
  k.onKeyDown("w", () => {
    if (player.isGrounded()) {
      player.jump(800);
    }
  });

  k.onKeyDown("a", () => {
    player.move(-200, 0);
  });

  k.onKeyDown("s", () => {
    player.move(0, 200);
  });

  k.onKeyDown("d", () => {
    player.move(200, 0);
  });

  k.onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump(800);
    }
  });

  //   k.onKeyPress("space", () => jump(player));
  //   k.onClick(() => jump(player));
}
