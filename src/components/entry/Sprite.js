import React, {useState } from "react";

const Sprite = ({ sprites }) => {
  const [shiny, setShiny] = useState(false);
  return (
    <div className="container mb-1">
      <img
        src={shiny ? sprites["front_shiny"] : sprites["front_default"]}
        style={{ width: "50%", height: "auto" }}
        class="card-img-top"
        alt="sprite"
      />
      <button
        onClick={() => setShiny(!shiny)}
        class={`btn btn-info form-control`}
      >
        {shiny ? "Shiny" : "Default"}
      </button>
      </div>
  );
};

export default Sprite;
