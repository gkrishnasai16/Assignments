import React, { Component } from 'react'
import { Router, Route, IndexRoute,hashHistory,Link} from 'react-router'

class App13 extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/address' component={Address} />
      </Router>
    )
  }
}

const Home = () => (<div>
    <h1>Hello from Home!</h1>
    <Link to='/address'><input type="button" name=" " value="address" /></Link>
    </div>)
const Address = () => <h1>Address </h1>
export default App13