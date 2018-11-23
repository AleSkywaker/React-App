import React, { Component } from "react";

class Counter extends Component {
  state = {
    contador: 0
  };
  render() {
    return (
      <React.Fragment>
        <span className="badge badge-success m-2">{this.formatCount()}</span>
        <button className="btn btn-outline-primary">Incrementar</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { contador } = this.state;
    return contador === 0 ? "Cero" : contador;
  }
}

export default Counter;
