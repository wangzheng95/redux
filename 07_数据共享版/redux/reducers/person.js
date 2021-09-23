import { ADDPERSON } from '../constant'

const initState = [{id:'001',name:'tom',age:18}]
export default function person_reducer (preState=initState, action) {
  const { type, data } = action
  switch (type) {
    case ADDPERSON:
      return [...preState,data]
    default:
      return preState
  }
} 