import React, { Component } from 'react'
import store from '../../redux/store'

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
    store.dispatch({type:'increment',data:newCount})
  }
  decrement = () => {
    let newCount = this.selectVal.value*1
    store.dispatch({type:'decrement',data:newCount})
  }
  incrementOdd = () => {
    let newCount = this.selectVal.value*1
    if(store.getState() % 2 === 0) {
      store.dispatch({type:'increment',data:newCount})
    }
  }
  incrementSync = () => {
    let newCount = this.selectVal.value*1
    setTimeout(() => {
      store.dispatch({type:'increment',data:newCount})
    }, 1000);
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
