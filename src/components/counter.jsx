import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
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
