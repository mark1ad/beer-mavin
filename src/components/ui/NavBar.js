import React from 'react';

const NavBar = (props) => {
  let _email;
  let _password;

  const submit = e => {
    e.preventDefault();
    props.onSubmit(_email.value, _password.value);
  }

  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <form onSubmit={submit} className="navbar-form navbar-right">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  ref={input => _email = input}>
                </input>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  ref={input=> _password = input}>
                </input>
              </div>
              <button type="submit" className="btn btn-success">Sign in</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
