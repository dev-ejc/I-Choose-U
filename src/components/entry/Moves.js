import React from 'react'

const Moves = ({moves}) => {
    return (
      <div classNAme="container">
        <ul class="list-group m-1">
            {moves.slice(0,4).map(move => (
                <li className="list-group-item">
                    {move.move.name.replace("-", " ")}
                </li>
            ))}
        </ul>
      </div>
    );
};

export default Moves;
