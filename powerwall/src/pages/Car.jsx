import React from "react";
import { useParams } from "react-router-dom";

export const Car = () => {
  let { CarID } = useParams();
  //   let params = useParams();
  //   console.log(params);

  return <span>Car by ID: {CarID} </span>;
};
