import React from "react";
import "./Card.css";
import gameImage from "../../Images/game.jpg";
import PokemonCard from "../../Interfaces/PokemonCard";

interface CardProps {
  pokemonCard: PokemonCard;
}
const Card: React.FC<CardProps> = ({ pokemonCard }) => {
  return (
    <div>
      <div
        className="card"
        style={{
          width: "40rem",
          height: "55rem",
          backgroundColor: pokemonCard.typeColor,
          borderColor: "gold",
          borderWidth: "10px",
          padding: "20px",
        }}
      >
        <div className="card-body">
          <div className="d-flex justify-content-evenly">
            {" "}
            <h5 className="card-title" id="title" style={{ width: "40rem" }}>
              {pokemonCard.name}
            </h5>
            <p className="card-text" id="hp" style={{ width: "10rem" }}>
              HP {pokemonCard.hitPoints}
            </p>
            <br />
            <br />
            <img
              src={require(`../../Images/${pokemonCard.type}.png`)}
              className="card-img-top"
              alt="..."
              style={{ width: "5rem" }}
            />
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <img
              id="sprite"
              src={pokemonCard.pokemonImg}
              className="card-img-top"
              alt="..."
            />
          </div>
          <br />
          <br />

          <div className="d-flex justify-content-evenly">
            {" "}
            <p className="card-text" id="size" style={{ width: "10rem" }}>
              Height: {pokemonCard.height}'
            </p>
            <p className="card-text" id="size" style={{ width: "10rem" }}>
              Weight: {pokemonCard.weight}lb
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="d-flex justify-content-end">
            {" "}
            <p className="card-text" id="move" style={{ width: "20rem" }}>
              {pokemonCard.move1}
            </p>
            <p className="card-text" id="moveHit" style={{ width: "5rem" }}>
              {pokemonCard.move1Power}
            </p>
          </div>
          <br />
          <br />
          <div className="d-flex justify-content-end">
            {" "}
            <p className="card-text" id="move" style={{ width: "20rem" }}>
              {pokemonCard.move2}
            </p>
            <p className="card-text" id="moveHit" style={{ width: "5rem" }}>
              {pokemonCard.move2Power}
            </p>
          </div>
          <br />

          <div className="d-flex justify-content-center">
            {" "}
            <p id="cr" className="card-text">
              &copy;2024 Pokemon Company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
