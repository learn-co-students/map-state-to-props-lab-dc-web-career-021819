import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  displayUsers = () => {
    return this.props.users.map(u => {
      return <li>{u.username}</li>;
    });
  };
  render() {
    return (
      <div>
        <ul>
          Users! {this.props.userCount}
          {this.displayUsers()}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users, userCount: state.users.length };
};

export default connect(mapStateToProps)(Users);
