import React, { Component } from 'react'
import { connect} from 'react-redux'
import { createDecrementAction, createIncrementAction, createIncrementSyncAction } from '../../redux/actions/count'
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
        <div>所加和为：{this.props.count},下方总人数为：{this.props.persons}</div>
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

function mapStateToProps (state) {
  return {count:state.count,persons:state.person.length}
}

function mapDispatchToProps (dispatch) {
  return {
    jia: data => dispatch(createIncrementAction(data)),
    jian: data => dispatch(createDecrementAction(data)),
    jiaSync: (data,time) => dispatch(createIncrementSyncAction(data,time))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
