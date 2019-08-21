import React from "react";
const Data = props => {
  console.log("TCL: Data props", props);
  return (
    <div>
      <h1>{props.data.name}</h1>

      <h3>{props.data.age}</h3>
      <h3>{props.data.email}</h3>
    </div>
  );
};

export default Data;
