import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <Link to="/about">About</Link>
          </div>
          <div className="col-xs-6">
            <span className="pull-right">&copy; <a href="http://www.markdemay.com">Mark De May</a></span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
