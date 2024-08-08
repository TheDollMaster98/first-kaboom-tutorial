import k from "./kaboom";
import { createPlayer } from "./components/player";
import { createPlatform } from "./components/platform";
import { createTree } from "./components/tree";
import { addControls } from "./systems/controls";
import { addCollisions } from "./systems/collisions";
import { initScore, updateScore, getScore } from "./systems/score";

// Definisci la scena di gioco
k.scene("game", () => {
  // Carica lo sprite
  k.loadSprite("bean", "sprites/bean.png");

  // Imposta la gravità
  k.setGravity(1600);

  // Crea gli oggetti di gioco
  const player = createPlayer();
  createPlatform();

  // Inizializza il punteggio
  initScore();

  // Fai spawnare gli alberi random
  k.loop(k.rand(0.5, 1.5), () => {
    createTree();
  });

  // Aggiungi i controlli
  addControls(player);

  // Gestisci le collisioni
  addCollisions(player);

  // Aggiorna il punteggio ogni frame
  k.onUpdate(() => {
    updateScore();
  });

  // Aggiungi un effetto Kaboom al click del mouse
  k.onClick(() => {
    k.addKaboom(k.mousePos());
  });
});

// Definisci la scena di perdita
k.scene("lose", (score) => {
  k.add([
    k.sprite("bean"),
    k.pos(k.width() / 2, k.height() / 2 - 80),
    k.scale(2),
    k.anchor("center"),
  ]);

  // Mostra il punteggio
  k.add([
    k.text(score),
    k.pos(k.width() / 2, k.height() / 2 + 80),
    k.scale(2),
    k.anchor("center"),
  ]);

  // Ritorna alla scena di gioco quando si preme spazio
  k.onKeyPress("space", () => k.go("game"));
  k.onClick(() => k.go("game"));
});

// Vai alla scena di gioco iniziale
k.go("game");
