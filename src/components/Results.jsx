import React from 'react';

class Results extends React.Component {
  constructor() {
    super();
    this.state = ({
      name: 'Results !!!',
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.name}</h1>
      </div>
    );
  }
}

export default Results;
