import React, { Component } from 'react';
import store from './redux//store'
import Count from './container/Count'

class app extends Component {
  render() {
    return (
      <div>
        <Count store={store}/>
      </div>
    );
  }
}

export default app;