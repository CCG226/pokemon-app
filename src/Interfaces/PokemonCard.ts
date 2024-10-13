import { error } from "console";

interface Pokemon {
  name: string;
  hitPoints: number;
  type: string;
  typeColor: string;
  pokemonImg: string;
  height: number;
  weight: number;
  move1: string;
  move1Power: number;
  move2: string;
  move2Power: number;
}
class PokemonCard implements Pokemon {
  constructor(
    public name: string,
    public hitPoints: number,
    public type: string,
    public typeColor: string,
    public pokemonImg: string,
    public height: number,
    public weight: number,
    public move1: string,
    public move1Power: number,
    public move2: string,
    public move2Power: number
  ) {
    this.hitPoints = calcHP();
    this.move1Power = calcMovePower();
    this.move2Power = calcMovePower();
    this.typeColor = getTypeColor(this.type);
  }
}
function calcHP(): number {
  var rand = Math.floor(Math.random() * (20 - 4 + 1)) + 4;
  return rand * 10;
}
function calcMovePower(): number {
  var rand = Math.floor(Math.random() * 10) + 1;
  return rand * 10;
}
function getTypeColor(type: string): string {
  if (type == "normal") {
    return "#b5a4a3";
  } else if (type == "fire") {
    return "#ff4000";
  } else if (type == "water") {
    return "#187adb";
  } else if (type == "electric") {
    return "#dfe627";
  } else if (type == "grass") {
    return "#16f23b";
  } else if (type == "ice") {
    return "#1fedd9";
  } else if (type == "fighting") {
    return "#cf420e";
  } else if (type == "poison") {
    return "#9512c4";
  } else if (type == "ground") {
    return "#c27d0e";
  } else if (type == "flying") {
    return "#5f98e8";
  } else if (type == "psychic") {
    return "#e653e3";
  } else if (type == "bug") {
    return "#1fa636";
  } else if (type == "rock") {
    return "#8c5a0a";
  } else if (type == "ghost") {
    return "#81508f";
  } else if (type == "dragon") {
    return "#1214a1";
  } else if (type == "dark") {
    return "#636363";
  } else if (type == "steel") {
    return "#949494";
  } else if (type == "fairy") {
    return "#f2abff";
  } else {
    return "";
  }
}
export default PokemonCard;
