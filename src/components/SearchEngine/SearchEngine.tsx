import React, { useState } from "react";
import "./SearchEngine.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

interface PokeApiRecievers {
  onGet: (data: any) => void;
}
const SearchEngine: React.FC<PokeApiRecievers> = ({ onGet }) => {
  const [nationalDexId, setnationalDexId] = useState<string>("");
  const [notification, setNotification] = useState<string | null>(null);

  const findPokemon = async () => {
    const getUrl: string = "https://pokeapi.co/api/v2/pokemon/" + nationalDexId;
    try {
      const response = await axios.get(getUrl);

      onGet(response.data);
    } catch (error) {
      setNotification("Failed to fetch data. Please try again later.");
    }
  };
  function searchHandler() {
    findPokemon();
  }
  return (
    <>
      <br />
      <br />

      <div className="d-flex justify-content-center">
        {notification && <div className="notification">{notification}</div>}
        <input
          type="number"
          value={nationalDexId}
          placeholder="Enter National Pokedex Id"
          onChange={(e) => setnationalDexId(e.target.value)}
        />
        <Button
          style={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            borderColor: "black",
          }}
          onClick={searchHandler}
        >
          <BiSearch />
        </Button>
      </div>
    </>
  );
};
export default SearchEngine;
