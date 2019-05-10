import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.users.length}</h1>
        <ul>
          {this.props.users.map((user, index) =>
             <li key={index}>{user.username}</li>
          )}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
