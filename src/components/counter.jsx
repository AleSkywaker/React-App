import React, { Component } from "react";

class Counter extends Component {
  state = {
    contador: 0,
    posts: []
  };

  style = {
    fontSize: 50,
    fontWeight: "bold"
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  renderTags() {
    if (this.state.posts.length === 0)
      return <li>'No hay datos que mostrar';</li>;
    return (
      <ul>
        {this.state.posts.map(post => (
          <li key={post}>{post}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = () => {
    console.log("increment", this.state.contador);
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.style} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          style={{ fontSize: 30 }}
          className="btn btn-outline-primary btn-sm"
        >
          Incrementar
        </button>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.contador === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { contador } = this.state;
    return contador === 0 ? "Cero" : contador;
  }
}

export default Counter;
