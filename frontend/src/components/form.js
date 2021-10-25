import React, { Component } from "react";
import Axios from 'axios';


class Post extends Component {
    state = {
        username: '',
        userpass:''
    };

    // changes name state to new state input
    onNewUser = e =>{
        this.setState({
            username: e.target.value
        });
    };
     // changes password state to new state input
    onNewPassword = e =>{
        this.setState({
            userpass: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const data= {
        username: this.state.username,
        userpass: this.state.userpass
        }
        Axios
            .post('http://localhost:8086/user', data)
            .then( res => console.log(res.data))
            .catch(err => console.log(err));
            console.log(data);
        // const xhr = new XMLHttpRequest();
        // xhr.open('POST','http://localhost:8085/user')
        // xhr.setRequestHeader("Content-Type", "application/json");
        // console.log(JSON.stringify({name: username, password: userpass}));
        // xhr.send(JSON.stringify({name: username, password: userpass}));
    };

render(){
    return(
        <div>
            <form onSubmit={this.handleSubmit}>
            <label> Enter your username
                <input
                type= "text"
                //value = {this.state.name}
                onChange = {this.onNewUser} 
                />
            </label>
            <label>Enter you password
            <input
                type = "password"
                //value = {this.state.password}
                onChange = {this.onNewPassword}
                />
            </label>
            <button type="submit">Sign Up</button>
            </form>

        </div>
    )
    }
}

export default Post