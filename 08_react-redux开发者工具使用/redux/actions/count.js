import { INCREMENT, DECREMENT } from '../constant'
export const createIncrementAction = data => ({type: INCREMENT,data})
export const createDecrementAction = data => ({type: DECREMENT,data})

// 异步action
export const createIncrementSyncAction = (data,time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time);
  }
}