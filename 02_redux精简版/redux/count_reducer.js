/*
  1.该文件是用于创建一个为Count组件服务的reducer，reducer本质就是一个函数
  2.reducer函数回接收到两个参数，分别为：之前的状态preState，动作对象action

*/
const initState = 0
export default function countReducer (perState=initState, action) {
  // action对象中包含两个属性：type,data
  const {type,data} = action
  switch (type) {
    case 'increment':
      return perState + data
    case 'decrement':
      return perState - data
    default:
      return perState
  }
}
