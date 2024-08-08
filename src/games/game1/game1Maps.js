import k from "../../kaboom";

export function map1() {
  k.add([
    k.sprite("bean"),
    k.pos(vec2(100, 200)),
    k.scale(0.5),
    k.anchor("center"),
  ]);

  const map = [
    "          $",
    "          $",
    "          $",
    "          $",
    "           ",
    "          &",
    "===========",
  ];

  const lvlConf = {
    // define the size of tile block
    tileWidth: 32,
    tileHeight: 32,
    // define what each symbol means, by a function returning a component list (what will be passed to add())
    tiles: {
      "=": () => [k.sprite("brum")],
      $: () => [k.sprite("brum")],
      "^": () => [k.sprite("gatto")],
    },
  };

  k.addLevel(map, lvlConf);
}
