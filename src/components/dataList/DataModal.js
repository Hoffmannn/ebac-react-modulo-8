import React from "react";
import { formatDate } from "../../utils/formatDate";
import "./DataModal.css";

const DataModal = ({ data, closeModal }) => {
  if (!data) return;
  return (
    <div className="DataModal">
      <ul key={data.id}>
        <li>Nome: {data.name}</li>
        <li>Idade: {data.age}</li>
        <li>Gênero: {data.gender}</li>
        <li>Data de criação: {formatDate(data.creationDate)}</li>
      </ul>
      <button onClick={() => closeModal()}>Fechar</button>
    </div>
  );
};

export default DataModal;
