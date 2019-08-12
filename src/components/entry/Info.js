import React, { useState } from "react";
import Stat from "../entry/Stat";
import Moves from "../entry/Moves";

const Info = ({ pokemon }) => {
    const [index, setIndex] = useState(true);
    const onClick = () => {
        setIndex(!index)
    }
  return (
    <div className="container">
    <button onClick={onClick} class="btn btn-secondary form-control">
        {index ? "Moves" : "Stats"}
    </button>
      {index ? (
        <Stat stats={pokemon.stats} />
      ) : (
        <Moves moves={pokemon.moves} />
      )}
    </div>
  );
};

export default Info;
