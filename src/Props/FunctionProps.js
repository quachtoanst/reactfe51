import React from "react";

export default function FunctionProps(props) {
  console.log("props: ", props);
  const { hoVaTen, lop } = props;

  return (
    <div>
      <h3>Function Props</h3>
      <p>Ten: {hoVaTen}</p>
      <p>Lop: {lop}</p>
    </div>
  );
}
