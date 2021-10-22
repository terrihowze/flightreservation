import React, { Component } from "react";
import axios from "axios";


class Post extends Component {
    state = {
        name: "",
        password:""
    };

    // changes name state to new state input
    onNewUser = e =>{
        this.setState({
            name = e.target.value
        });
    };
     // changes password state to new state input
    onNewPassword = e =>{
        this.setState({
            password = e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            name: this.state.name,
            password: this.state.password
        };
        axios
        .post("/user")

    }

render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
            <label> Enter your username
                <input
                type= "text"
                value = {this.state.name}
                onChange = {this.onNewUser} required
                />
            </label>
            <label>Enter you password
            <input
                type = "password"
                value = {this.state.password}
                onChange = {this.onNewPassword} required
                />
            </label>
            </form>

        </div>
    )
    }
}

export default Post