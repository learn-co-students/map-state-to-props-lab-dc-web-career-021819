import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    return (
      <div>
        <ul>Users!</ul>
        {this.props.users.map(u => (
          <li>{u.username}</li>
        ))}
        <p>{`Total: ${this.props.userCount}`}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  };
};

export default connect(mapStateToProps)(Users);
