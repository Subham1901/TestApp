import React from "react";
import HOC from "./HOC";

const A = ({ common, name }) => {
  return (
    <div>
      A {common} {name}
    </div>
  );
};

export default HOC(A, "A");
