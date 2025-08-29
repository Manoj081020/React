import React from "react";
export default class LoginFormData extends React.Component{
        constructor(props){
            super(props);
            this.state = { username: '', password: ''};
        }
        handleChange = ({ target })=> {
            this.setState({[target.name]: target.value});
        };

        render(){
            return (
                <>
                <form>
                    <label>username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>

                    <lebel>password</lebel>
                    <input type="password" name ="password" value={this.state.password} onChange={this.handleChange}/>
                </form>
                <h3>your username is: {this.state.username}</h3>
                </>
            )
        }

}
