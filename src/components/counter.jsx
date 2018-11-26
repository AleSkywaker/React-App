import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    posts: []
  };

  style = {
    fontSize: 10,
    fontWeight: "bold"
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  renderTags() {
    // if (this.state.posts.length === 0)
    //   return <li>'No hay datos que mostrar';</li>;
    return (
      <ul>
        {this.state.posts.map(post => (
          <li key={post}>{post}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = producto => {
    // console.log("product", producto);
    // console.log("increment", this.state.contador);
    this.setState({ value: this.state.value + 1 });
    // this.setState({ contador: producto });
  };

  doHanleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    console.log("props", this.props);
    return (
      <React.Fragment>
        <h1>{this.props.counter.id}</h1>
        {this.props.children}
        <span style={this.style} className={this.getBadgeClass()}>
          {this.formatCount()}
        </span>
        <button
          // onClick={this.handleIncrement}
          // eslint-disable-next-line no-undef
          onClick={product => this.handleIncrement(product)}
          // onMouseEnter={this.doHanleIncrement}
          style={{ fontSize: 10 }}
          className="btn btn-outline-primary btn-sm"
        >
          Incrementar
        </button>
        <div
          className="btn btn-outline-danger btn-sm m-2"
          style={{ fontSize: 10 }}
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Borrar
        </div>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Cero" : value;
  }
}

export default Counter;
