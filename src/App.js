import './App.scss';
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getUser } from './actions/user'
import GlobalLoading from './components/GlobalLoading'
import InfoUserForm from './components/InfoUserForm'
import ListUser from './components/ListUser'
function App(props) {
  const { onGetUser, showUserForm } = props;
  useEffect(() => {
    onGetUser();
  }, [])
  return (
    <div className="App">
      {
        showUserForm && <InfoUserForm />
      }
      <ListUser />
      <GlobalLoading />
    </div>
  );
}

const mapStateToProps = ({ ui }) => {
  const { showUserForm } = ui;
  return { showUserForm };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onGetUser: () => dispatch(getUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
