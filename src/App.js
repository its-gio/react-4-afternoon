import React, { Component } from 'react';
import { HashRouter as Router, Link } from "react-router-dom";
import Routes from "./routes"

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className='nav'>
            <div>WestSide University</div>
              <div className='link-wrap'>
                <Link to="/" className='links'>Home</Link>
                <Link to="/about" className='links'>About</Link>
              </div>
          </nav>

          {Routes}
        </div>
      </Router>
    )
  }
}