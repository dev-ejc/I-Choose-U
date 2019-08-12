import React from "react";

const Sprite = ({sprites}) => {
    return (
      <div className="container m-2">
        <img
          src={sprites["front_default"]}
          style={{ width: "50%", height: "auto" }}
          class="card-img-top"
          alt="sprite"
        />
      </div>
    );
};

export default Sprite;
