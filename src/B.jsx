import React from "react";
import HOC from "./HOC";

const B = ({ common, name }) => {
  return (
    <div>
      B {common} {name}
    </div>
  );
};

export default HOC(B, "B");
