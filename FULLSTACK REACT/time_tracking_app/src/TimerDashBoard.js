import React, { Component } from 'react';
import './TimerDashBoard.css';
import TimerHead from './TimerHead';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimerDashBoard extends Component {
  static id = 0;

  state = {
    timers: []
  };
  

  handleCreateTF = (timer) => {
    timer.id = TimerDashBoard.id++;
    timer.time = "0:0:0";
    let newArr = [...this.state.timers, timer]
    this.setState({timers: newArr});
  };

  handleUpdateTF = (timer) => {
    let index = this.state.timers.findIndex(t => t.id === timer.id);
    let newArr = [...this.state.timers.slice(0, index), timer, ...this.state.timers.slice(index + 1)];
    this.setState({timers: newArr});
  };

  handleDeleteTF = (id) => {
    let index = this.state.timers.findIndex(t => t.id === id);
    let newArr = [...this.state.timers.slice(0, index), ...this.state.timers.slice(index + 1)];
    this.setState({timers: newArr});
  };

  render() {
    return (
      <div className="App">
        <TimerHead title='Timers' />
        <EditableTimerList timers={this.state.timers} handleDeleteTF={this.handleDeleteTF} handleUpdateTF={this.handleUpdateTF} />
        <ToggleableTimerForm handleCreateTF={this.handleCreateTF} />
      </div>
    );
  }
}

export default TimerDashBoard;
