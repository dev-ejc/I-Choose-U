import React, { useState } from "react";
import Stat from "../entry/Stat";
import Moves from "../entry/Moves";

const Info = ({ pokemon }) => {
  const [index, setIndex] = useState(true);
  return (
    <div className="container">
      <button
        onClick={() => setIndex(!index)}
        class="btn form-control border-secondary"
      >
        {index ? "Stats" : "Moves"}
      </button>
      {index ? <Stat stats={pokemon.stats} /> : <Moves moves={pokemon.moves} />}
    </div>
  );
};

export default Info;
