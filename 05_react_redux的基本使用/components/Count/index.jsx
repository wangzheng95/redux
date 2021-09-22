import React, { Component } from 'react'

export default class Count extends Component {
  increment = () => {
    let newCount = this.selectVal.value*1
    this.props.jia(newCount)
  }
  decrement = () => {
    let newCount = this.selectVal.value*1
    this.props.jian(newCount)
  }
  incrementOdd = () => {
    let newCount = this.selectVal.value*1
    if(this.props.count % 2 === 0) {
      this.props.jia(newCount)
    }
  }
  incrementSync = () => {
    let newCount = this.selectVal.value*1
    this.props.jiaSync(newCount,1000)
  }
  render() {
    return (
      <div>
        <div>所加和为：{this.props.count}</div>
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
