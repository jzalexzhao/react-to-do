import React, { Component } from "react";

class Counter extends Component {


  formatCounter = () => {
    const {value} = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
 
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment  
        </button>
        <button className="btn btn-danger  btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
