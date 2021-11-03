import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import React from 'react';

class App extends React.Component {
    render() {
        const openMenu =  () =>{
            document.querySelector(".sidebar").classList.add("open");
        }
        const closeMenu =  () =>{
            document.querySelector(".sidebar").classList.remove("open");
        }
      return (
        <BrowserRouter>  
        <div className="grid-container"> 
                <header className="header">
                    <div className="brand">
                        <button onClick={openMenu}>
                            &#9776;
                        </button>
                        <Link to ="/">klodin</Link>
                    </div>
                    <div className="header-links">
                        <a href="cart.html">Cart</a>
                        <a href="signin.html">Login</a>
                    </div>
                </header>
                <aside className="sidebar">
                    <h3>Shopping Categories</h3>
                    <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                    <ul>
                        <li>
                            <a href="index.html">Pants</a>
                        </li>
                        <li>
                            <a href="index.html">Pants</a>
                        </li>
                    </ul>
                </aside>
                <main className="main">
                    <div className="content">
                        <Route path = "/product/:id" component={ProductScreen}/>
                        <Route path = "/" exact={true} component={HomeScreen}/>
                         
                    </div>
                </main>
                <footer className="footer">
                    All rights reserved
                </footer>
            </div>
            </BrowserRouter>
      );
    }
}

export default App;
