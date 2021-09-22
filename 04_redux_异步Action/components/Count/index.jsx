import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction,createIncrementAsyncAction } from '../../redux/count_actions'

export default class Count extends Component {
  // state = {
  //   count: 0
  // }
  
  // 监听store的变化，从而重新渲染页面
  // componentDidMount () {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }
  increment = () => {
    let newCount = this.selectVal.value*1
    store.dispatch(createIncrementAction(newCount))
  }
  decrement = () => {
    let newCount = this.selectVal.value*1
    store.dispatch(createDecrementAction(newCount))
  }
  incrementOdd = () => {
    let newCount = this.selectVal.value*1
    if(store.getState() % 2 === 0) {
      store.dispatch(createIncrementAction(newCount))
    }
  }
  incrementSync = () => {
    let newCount = this.selectVal.value*1
    // setTimeout(() => {
      store.dispatch(createIncrementAsyncAction(newCount,1000))
    // }, 1000);
  }
  render() {
    return (
      <div>
        <div>所加和为：{store.getState()}</div>
        <div>
          <select ref={c => this.selectVal = c }>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementOdd}>和为偶数时加</button>
        <button onClick={this.incrementSync}>异步加</button>
      </div>
    )
  }
}
