import React from 'react';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import UserCreate from './UserCreate';
import Home from './Home';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link href="#pricing"> <Link to="/list">User List</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/user"> Create User</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/list">
            <Users />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/user">
            <UserCreate />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        {/* <h1>Hello app</h1> */}



        {/* <Contact/> */}
        {/* <Users/> */}
        {/* <UserCreate/> */}
      </Router>

    </div>
  );
}

export default App;
