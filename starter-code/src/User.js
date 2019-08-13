import React, { Component } from "react";
import "./User.css";

class User extends Component {
  render() {
    return (
      <div className="User">
        <img src={this.props.image} />
        <p> {this.props.userName} </p>
        <button class="remove" onClick={()=> this.props.deleteItem(this.props.index)}>Delete</button>
        <p> {this.props.popularity} </p>
      </div>
    );
  }
}
export default User;
