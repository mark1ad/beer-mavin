import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchForm = (props) => {
  let _beerName;

  const submit = e => {
    e.preventDefault();
    props.onSubmit(_beerName.value);

    // redirect to search results page
    const path = `/beers/` + _beerName.value;
    if (path !== props.history.location.pathname) {
      props.history.push(path);
    }

    _beerName.focus();
  }

  return (
    <div id="search-form">
      <form onSubmit={submit}>
        <div className="row">

          <div className="col-xs-8 col-sm-4">
            <input type="text"
                className="search-field form-control"
                ref={input => _beerName = input}
                placeholder="Beer" />
          </div>

          <div className="col-xs-3 col-sm-2">
            <button className="btn btn-default" type="submit">Find Beer</button>
          </div>
        </div>

      </form>
    </div>
  )
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default withRouter(SearchForm);
