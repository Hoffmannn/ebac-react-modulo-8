import React, { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import DataModal from "./DataModal";

const DataList = ({ submittedData, removeItem }) => {
  const [modalData, setModalData] = useState(null);

  const showModal = (data) => {
    setModalData(data);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const handleRemoveItem = (id) => {
    setModalData(null);
    removeItem(id);
  };

  return (
    <div className="DataList">
      {submittedData.map((data) => (
        <ul key={data.id}>
          <li>
            Nome: {data.name} | Data de criação: {formatDate(data.creationDate)}{" "}
            | <button onClick={() => showModal(data)}>Detalhes</button>{" "}
            <button onClick={() => handleRemoveItem(data.id)}>Excluir</button>
          </li>
        </ul>
      ))}
      <DataModal data={modalData} closeModal={closeModal} />
    </div>
  );
};

export default DataList;
