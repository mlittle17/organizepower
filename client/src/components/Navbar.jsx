import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

// import MovementList from './MovementList';
import Profile from './Profile.jsx';
import Explore from './Explore.jsx';
import Login from './Login.jsx';
import Movement from './Movement.jsx';
import SignUp from './SignUp.jsx';
import { getUserProfileById } from '../services/services';


const Navbar = () => {
  // const { id } = currentMovement;
  const [currentMovement, setCurrentMovement] = useState({});
  const [user, setUser] = useState({});

  function handleClick(movemementId) {
    console.log(movemementId);
    // debugger;
    axios.get(`/movement/:${movemementId}`)
      .then(res => {
        setCurrentMovement(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const setUserState = (u) => {
    setUser(u);
  };

  useEffect(() => {
    getUserProfileById(1)
      .then(res => {
        debugger;
        console.log(res);
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/explore">Explore Page</Link></li>
          <li><Link to={`/profile/${user.id}`}>Profile Page</Link></li>
          <li><Link to="/login">Login Page</Link></li>
          <li><Link to="/signup">SignUp Page</Link></li>
          <li><Link to="/">Go Home</Link></li>
        </ul>
        <Switch>
          <Route exact path={`/movement/${currentMovement.id}`} render={() => (<Movement currentMovement={currentMovement} />)} />
          <Route exact path="/explore" render={() => (<Explore user={user} handleClick={handleClick} />)} />
          <Route exact path={`/profile/${user.id}`} render={() => (<Profile user={user} handleClick={handleClick} />)} />
          <Route exact path="/login" render={() => (<Login />)} />
          <Route exact path="/signup" render={() => (<SignUp setUserState={setUserState} />)} />
        </Switch>
      </div>
    </Router>
  );
};

// these commented out functions makes it so that the nav bar items are on every page

// function MovementList() {
//   return (
//     <div>
//       <h2>MovementList</h2>
//     </div>
//   );
// }

// function Profile() {
//   return (
//     <div>
//       <h2>Profile</h2>
//     </div>
//   );
// }

// function Explore() {
//   return (
//     <div>
//       <h2>Explore</h2>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div>
//       <h2>Login</h2>
//     </div>
//   );
// }

{ /* <Router>
<strong>OrganizePower</strong>
<div>
  <nav>
    <ul>
      <li>
        <Link to="/MovementList">MovementList </Link>
      </li>
      <li>
        <Link to="/Profile">Profile </Link>
      </li>
      <li>
        <Link to="/Explore">Explore </Link>
      </li>
      <li>
        <Link to="/Login">Login/signUp </Link>
      </li>
    </ul>
  </nav>

  {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */ }
//   <Switch>
//     <Route path="/MovementList">
//       <MovementList />
//     </Route>
//     <Route path="/profile">
//       <Profile />
//     </Route>
//     <Route path="/Explore">
//       <Explore />
//     </Route>
//     <Route path="/login/signup">
//       <Login />
//     </Route>
//   </Switch>
// </div>
// </Router> */}

export default Navbar;
