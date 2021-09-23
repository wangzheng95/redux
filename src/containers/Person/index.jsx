import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    const person = {id: nanoid(),name:this.personName.value,age:this.personAge.value}
    this.props.addPerson(person)
    console.log(this.props.person);
    this.personName.value = ""
    this.personAge.value = ""
  }
  render() {
    return (
      <div>
        <h2>我是person组件,上方求和为{this.props.count}</h2>
        <input ref={c => this.personName = c} type="text" placeholder="请输入名字" />
        <input ref={c => this.personAge = c} type="text" placeholder="请输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.person.map(item => {
              return (
                <li key={item.id}>名字：{item.name}-年龄：{item.age}</li>
              )
            })
          }
          {/* <li>名字1-年龄1</li>
          <li>名字2-年龄2</li>
          <li>名字3-年龄3</li> */}
        </ul>
      </div>
    )
  }
}
// function mapStateToProps (state) {
//   return {person: state}
// }
// function mapDispatchToProps (dispatch) {
//   return {
//     addPerson: data => dispatch(createAddPersonAction(data))
//   }
// }
export default connect(
  state => ({person:state.person,count:state.count}),
  {
    addPerson: createAddPersonAction
  }
  )(Person)
