import React from "react";
import "./style.css";

function Nav() {
    return (
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav className="uk-navbar-container" uk-navbar="true">
                <div className="uk-navbar-left">
                    <a href="/" className="uk-navbar-item uk-logo">Google Books</a>
                    <ul className="uk-navbar-nav">
                        <li><a href="/">Search</a></li>
                        <li><a href="/saved">Saved</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;