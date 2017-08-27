import React, { Component } from 'react';
import Todo from './Todo'; /* code changed */

class Todos extends Component {

  render() {
  return(
    <div>
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <p>
          <label>add todo</label>
          <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
}
};

export default Todos;
