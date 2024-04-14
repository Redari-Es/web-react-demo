import React from "react";
import {Redirect} from "react-router-dom";
import {post} from "../utils/request";
import url from "../utils/url";
import "./Login.css";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            redireactToReferrer:false
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    // 处理用户名和密码
    handleChange(e){
        if (e.target.name==="username"){
       this.setState({
        usernamae:e.target.value
       });
        }else if (e.target.name==="password"){
            this.setState({
                password:e.target.value
            });
        }else{
            // do nothing
        }
    }
    // 提交表单
    handleSubmit(e){
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        if (usernaame.length===0||password.length===0){
            alert("用户名或密码不能为空！");
            return ;
        }
        const params={
            username,
            password
        };
        post(url.login(),params).then(data=>{
            if (data.error){
                alert(data.error.message||"login failed");
            }else{
                sessionStorage.setItem("userId",data.userId);
                sessionStorage.setItem("username",data.username);
                this.setState({
                    redireactToReferrer:true
                });
            }
        });
    }
    render(){
        const{from}=this.props.location.state||{from:{pathname:"/"}}
        const{redireactToReferrer}=this.state;
        if (redireactToReferrer){
            return <Redirect to={from}/>;
        }
        return (
            <form className="login" onSubmit={this.handleSubmit}>

            <div>
            <label>
                用户名：
                <input
                name="username"
                type="text"
                value={this.state.username}
            onChange={this.handleChange}
            />
            </label>
            </div>
            
            <div>
            <label>
                密码：
                <input
                name="password"
                type="password"
                value={this.state.password}
            onChange={this.handleChange}
            />
            </label>
            </div>
            <input type="submit" value="登录"/>
            </form>
        )
    }
}
export default Login;