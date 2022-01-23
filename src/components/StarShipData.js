import React from "react";
//props get passsed into the functional component to be deifned
const StarShipData = (props) => {
  console.log(props.ships.name);
  //   return <div>{props.ships.name} </div>;
  //   let rowOne = props.ships.name.flat();

  return (
    <div className="Starship-container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.ships.name}</h5>
        </div>
      </div>
    </div>
  );
};
export default StarShipData;
