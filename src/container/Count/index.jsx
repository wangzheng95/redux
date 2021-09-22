import React, { Component } from 'react'
import { connect } from 'react-redux'
// import CountUI from '../../components/Count'

import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_actions.js'



class CountUI extends Component {
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

// 映射状态
// const mapStateToProps = state => ({count: state})
// 映射操作状态的方法
// const mapDispatchToProps = dispatch =>
//   ({    
//     jia: data => dispatch(createIncrementAction(data)),
//     jian: data => dispatch(createDecrementAction(data)),
//     jiaSync: (data,time) => dispatch(createIncrementAsyncAction(data,time))
//   })

export default connect(
  state => ({count: state}), 

  // mapDispatchToProps的一般写法
  // dispatch => ({    
  //   jia: data => dispatch(createIncrementAction(data)),
  //   jian: data => dispatch(createDecrementAction(data)),
  //   jiaSync: (data,time) => dispatch(createIncrementAsyncAction(data,time))
  // })

  // mapDispatchToProps的简写
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaSync: createIncrementAsyncAction
  }
)(CountUI)