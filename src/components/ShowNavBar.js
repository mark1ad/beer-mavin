import { connect } from 'react-redux';

import NavBar from './ui/NavBar';

import {
  setUserInfo
} from './actions';

const mapDispatchToProps = dispatch => {
  let onSubmit = (email, password) => {
    let user = {
      username: email,
      password: password
    }

    global.axiosInstance.post("users/login", { user: user })
    .then(res => {
      dispatch(setUserInfo(res.data.user['id'], res.data.user['username'],
        res.data.token))
    })
    .catch((response) => {
      console.log("login failed", response);
    })
  }
  return {
    onSubmit: onSubmit
  }
}

const ShowNavBar = connect(
  null,
  mapDispatchToProps
) (NavBar)

export default ShowNavBar;
