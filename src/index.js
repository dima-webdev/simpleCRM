import React from 'react'
import ReactDOM from 'react-dom'
import FreeCRM from './components/FreeCRM/FreeCRM'
import * as serviceWorker from './serviceWorker'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(<FreeCRM />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();