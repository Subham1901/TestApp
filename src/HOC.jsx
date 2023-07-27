import React from "react";

const HOC = (COMP) => {
  return () => {
    return <COMP common={"hello"} name={name}></COMP>;
  };
};

export default HOC;
