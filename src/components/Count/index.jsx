import React, { Component } from 'react'
import store from '../../redux/store'
export default class Count extends Component {
  // state = {
  //   count: 0
  // }
  componentDidMount () {
    this.setState({})
  }
  increment = () => {
    // console.log(this.selectVal.value);
    // let newCount = this.state.count + this.selectVal.value*1
    // this.setState({
    //   count: newCount
    // })
    let data = this.selectVal.value*1
    store.dispatch({type:'increment',data})
  }
  decrement = () => {
    let newCount = this.state.count - this.selectVal.value*1
    this.setState({
      count: newCount
    })
  }
  incrementOdd = () => {
    let newCount = this.state.count + this.selectVal.value*1
    if(this.state.count % 2 === 0) {
      this.setState({
        count: newCount
      })
    }
  }
  incrementSync = () => {
    let newCount = this.state.count + this.selectVal.value*1
    setTimeout(() => {
      this.setState({
        count: newCount
      })
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
