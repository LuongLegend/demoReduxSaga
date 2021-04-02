import './App.scss';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUser } from './actions/user'
import GlobalLoading from './components/GlobalLoading'
import AddUser from './components/AddUser'
import ListUser from './components/ListUser'
function App(props) {
  const { onGetUser } = props;
  useEffect(() => {
    onGetUser();
  }, [])
  return (
    <div className="App">
      <AddUser />
      <ListUser />
      <GlobalLoading />
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    onGetUser: () => dispatch(getUser())
  }
}
export default connect(null, mapDispatchToProps)(App);
