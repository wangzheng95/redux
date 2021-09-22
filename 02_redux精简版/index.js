import React from "react";
import reactDom from "react-dom";
import App from './app'
import store from './redux/store'

reactDom.render(<App/>,document.getElementById('root'))
store.subscribe(()=>{
  reactDom.render(<App/>,document.getElementById('root'))
})