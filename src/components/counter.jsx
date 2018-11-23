import React, { Component } from "react";

class Counter extends Component {
  state = {
    contador: 0
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Incrementar</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { contador } = this.state;
    return contador === 0 ? "Cero" : contador;
  }
}

export default Counter;
