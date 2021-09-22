import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import store from './redux/store'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
,document.getElementById('root'))

// 不需要自己监听，react_redux会自动监听
// store.subscribe(() => {
//   ReactDOM.render(<App/>,document.getElementById('root'))
// })