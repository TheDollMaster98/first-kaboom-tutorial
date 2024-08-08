import k from "../kaboom";

let score = 0;
let scoreLabel;

export function initScore() {
  score = 0;
  scoreLabel = k.add([k.text(score), k.pos(24, 24)]);
}

export function updateScore() {
  score++;
  scoreLabel.text = score;
}

export function getScore() {
  return score;
}
