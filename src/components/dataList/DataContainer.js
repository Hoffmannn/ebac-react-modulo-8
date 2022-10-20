import React from "react";
import DataList from "./DataList";
import "./DataContainer.css";

const DataContainer = ({ submittedData, orderList, removeItem }) => {
  return (
    <div className="DataContainer">
      <span>Ordenar por:</span>
      <button onClick={() => orderList("asc")}>Criação ascendente</button>
      <button onClick={() => orderList("desc")}>Criação descendente</button>
      <DataList submittedData={submittedData} removeItem={removeItem} />
    </div>
  );
};

export default DataContainer;
