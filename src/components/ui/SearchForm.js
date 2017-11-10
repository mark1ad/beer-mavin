import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchForm = (props) => {
  let _beerName;

  const submit = e => {
    e.preventDefault();
    props.onSubmit(_beerName.value);

    // redirect to search results page
    const path = `/search/${_beerName.value}`;
    if (path !== props.history.location.pathname) {
      props.history.push(`/search/${_beerName.value}`);
    }

    _beerName.focus();
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text"
            ref={input => _beerName = input}
            placeholder="Beer Name" />
        <button type="submit">Find Beer</button>
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default withRouter(SearchForm);
