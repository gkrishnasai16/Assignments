import React, { Component } from 'react'
import { Router, Route, IndexRoute,hashHistory,Link} from 'react-router'
import Employee from './Employee.jsx';

class App11 extends Component {
    render () {
        return (
          <Router history={hashHistory}>
            <Route path='/' component={Container}>
              <IndexRoute component={Home} />
              <Route path='address' component={Address}>
                  <IndexRoute component={Twitter}/>
                  <Route path='instagram' component={Instagram}/>
              </Route>
              <Route path='register' component={register}>
                  <IndexRoute component={signin}/>
                  <Route path='signup' component={signup}/>
              </Route>
              <Route path = 'employee' component={Employee}/>
              <Route path='about(/:name)' component={About} />
              <Route path='*' component={NotFound} />
            </Route>
            
          </Router>
        )
      }
}
const About=(props) =>(
    <div>
        <h1>welcome to the About Page</h1>
        <h2>{props.params.name}</h2>
    </div>
)
function App1(){
    const isBackgroundRed=true;
}
const Twitter = () => <h1>Twitter</h1>
const Instagram = () => <h1>Instgaram</h1>
const signin = () => <h1>signin
    Enter ur name <input type="text" name=""></input><br></br>
    Enter Password<input type="password" name=""></input>
</h1>
const signup = () => <h3>signup
    Enter ur name <input type="text" name=""></input><br></br>
    Enter Password<input type="password" name=""></input>
    Confirm Password<input type="password" name=""></input>
</h3>
const Home = () => <h1>Hello from Home!</h1>
const Address = (props) => 
<div><h1>We are located at 555 Jackson St.</h1>
<br>
</br>
<Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to="/address">Twitter Feed</Link>
<Link activeStyle={{color:'#53acff'}} to="/address/instagram">Instagram Feed</Link>
{props.children}
</div>
const register = (props) => 
<div >
    <h1>Register Page</h1>
    
<br>
</br>
<Link to="/register">Signin</Link>
<Link to="/register/signup">Signup</Link>
{props.children}
</div>

const NotFound=()=><h1> 404 ERROR PAGE NOT FOUND </h1>

const Nav = () => (
    <div>
      <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/'>Home</Link>&nbsp;
      <Link to='/address'>Address</Link>
    <Link to ='/register'>Register</Link>
    <Link to ='/employee'>Employee Details</Link>
    <Link to='/about'>About</Link>
    </div>
  )

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>
  


export default App11