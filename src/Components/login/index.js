import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from "react-router";
import Login from './login'
import { addUser } from '../../redux/user/actions'


const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({
  addUser: bindActionCreators(addUser, dispatch),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))