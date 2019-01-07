import React, { Component } from 'react';
import Header from './components/header/header';
import './App.css';
import search from './search.png'



class App extends Component {
    render() {
        return (
          
            <div className="App">
            <div className="Header">
            <nav className="navigation">
            <img src={search} className="Logo" />
            <ul>
            
            <li><a  className="a" href="#">HOME</a></li>
            <li><a className="a" href="">PRODUCT</a></li>
            <li><a className="a" href="">MENU</a></li>
            </ul>
            </nav>
            <h1 className="title1" >THIS IS OUT NEW SITE </h1>
            <h3 className="title2">We are the new web desing company thath bla something ou never saw</h3>
            <button type="button" className="button">CLICK FOR OFFER</button>
            </div>
            <Header />
            
            </div>
            

        );
    }
}

export default App;