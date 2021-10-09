import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid-container"> 
            <header className="header">
                <div className="brand">
                    <button onclick="openMenu()">
                        &#9776;
                    </button>
                    <a href="index.html">Camazon</a>
                </div>
                <div className="header-links">
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Login</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onclick="closeMenu()">x</button>
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
                    <ul className="products">
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/d3.jpg" alt="product"/>
                                <div className="product-name">
                                    <a href="products.html">Slim Shirt</a></div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">GHS 500</div>
                                <div className="product-rating">4.5 Stars(10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/d3.jpg" alt="product"/>
                                <div className="product-name">
                                    <a href="products.html">Slim Shirt</a></div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">GHS 500</div>
                                <div className="product-rating">4.5 Stars(10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/d3.jpg" alt="product"/>
                                <div className="product-name">
                                    <a href="products.html">Slim Shirt</a></div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">GHS 500</div>
                                <div className="product-rating">4.5 Stars(10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/d3.jpg" alt="product"/>
                                <div className="product-name">
                                    <a href="products.html">Slim Shirt</a></div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">GHS 500</div>
                                <div className="product-rating">4.5 Stars(10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/d3.jpg" alt="product"/>
                                <div className="product-name">
                                    <a href="products.html">Slim Shirt</a></div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">GHS 500</div>
                                <div className="product-rating">4.5 Stars(10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/d3.jpg" alt="product"/>
                                <div className="product-name">
                                    <a href="products.html">Slim Shirt</a></div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">GHS 500</div>
                                <div className="product-rating">4.5 Stars(10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/d3.jpg" alt="product"/>
                                <div className="product-name">
                                    <a href="products.html">Slim Shirt</a></div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">GHS 500</div>
                                <div className="product-rating">4.5 Stars(10 reviews)</div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img className="product-image" src="/images/d3.jpg" alt="product"/>
                                <div className="product-name">
                                    <a href="products.html">Slim Shirt</a></div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">GHS 500</div>
                                <div className="product-rating">4.5 Stars(10 reviews)</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
            <footer className="footer">
                All rights reserved
            </footer>
        </div>
  );
}

export default App;
