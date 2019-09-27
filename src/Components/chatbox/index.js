import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { withRouter } from "react-router";
import ChatBox from './chatbox'
// import { addUser } from '../../redux/user/actions'


const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = dispatch => ({
  // addUser: bindActionCreators(addUser, dispatch),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatBox))