import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 4 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ],
    posts: []
  };

  handleDelete = counterId => {
    const contadores = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: contadores });
  };
  handleReset = () => {
    const contadores = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: contadores });
  };
  render() {
    return (
      <div>
        <div className="btn btn-success btn-sm m-2" onClick={this.handleReset}>
          Reset
        </div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          >
            <h3>Titulo {counter.id}</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
