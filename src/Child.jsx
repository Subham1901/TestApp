import React from "react";

const Child = ({ value, Fn }) => {
  return (
    <div>
      <form>
        <input
          defaultValue={value}
          type="text"
          onChange={(e) => Fn(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Child;
