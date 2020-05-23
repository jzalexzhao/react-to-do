import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
    ],
    nextId : 1,
  };

  handleIncremnt = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleAdd = () => {
    const counter_size = this.state.counters.length;
    let newCounter = {...this.state.counters[counter_size - 1]};
    newCounter.id = this.state.nextId;
    newCounter.value = 0;
    let newCounters = [...this.state.counters];
    newCounters.push(newCounter);
    this.setState({counters: newCounters, nextId: this.state.nextId + 1});
  }

  render() {

    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        <button className="btn btn-success btn-sm m-2" onClick={this.handleAdd}>
          Add
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.handleIncremnt}
            onDelete={this.handleDelete}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
