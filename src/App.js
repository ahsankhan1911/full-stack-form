import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Signup from './Signup'

const NavRoutes =() => (
   <nav className=" NavBar navbar navbar-inverse" >
  <div className="container-fluid">
  
    <ul className="nav navbar-nav navbar-center">
      <li><Link to="/home">Home</Link> </li>
      <li><Link to="/users">Users</Link> </li>
      <li><Link to="/signup">Signup</Link> </li>
    </ul>
  </div>
</nav>
)

const App = () => (
   
 <Router>
   <div> 
   <NavRoutes /> 
     <Route 
          exact 
          path="/" 
          component={Home}/>
     <Route  
          path="/users" 
          component={Users}/>

      <Route  
      path="/signup" 
      component={Signup}/>
    
   </div>
 </Router>
);

export default App;