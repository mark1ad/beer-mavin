import React from 'react';

// TODO: Change www.example.com to a real href
const Menu = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="www.example.com" className="navbar-brand">Beer Rater</a>

        <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>

        <div id="navbar" className="navbar-collapse collapse">
          <ul className="navbar-nav mr-auto">
            <li>
              Hey
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Menu;
