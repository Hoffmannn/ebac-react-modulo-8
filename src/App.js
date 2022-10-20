import React from "react";
import "./App.css";
import DataContainer from "./components/dataList/DataContainer";
import Form from "./components/form/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0,
      gender: "Masculino",
      submittedData: [],
    };
  }

  handleChangeInput = (event, field) => {
    console.log(event.target.value, field);
    this.setState({ ...this.state, [field]: event.target.value });
  };

  handleSubmit = () => {
    const { name, age, gender, submittedData } = this.state;
    this.setState({
      name: "",
      age: 0,
      gender: "Masculino",
      submittedData: [
        ...submittedData,
        { id: Math.random(), name, age, gender, creationDate: Date.now() },
      ],
    });
  };

  orderList = (type) => {
    const newData = [...this.state.submittedData].sort((a, b) => {
      if (type === "asc") {
        return b.creationDate > a.creationDate ? -1 : 0;
      } else {
        return a.creationDate > b.creationDate ? -1 : 0;
      }
    });
    this.setState({ ...this.state, submittedData: newData });
  };

  removeItem = (id) => {
    const newData = [...this.state.submittedData].filter(
      (data) => data.id !== id
    );
    this.setState({ ...this.state, submittedData: newData });
  };

  render() {
    return (
      <div className="App">
        <Form
          name={this.state.name}
          age={this.state.age}
          gender={this.state.gender}
          handleChangeInput={this.handleChangeInput}
          handleSubmit={this.handleSubmit}
        />
        <DataContainer
          submittedData={this.state.submittedData}
          orderList={this.orderList}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

export default App;
