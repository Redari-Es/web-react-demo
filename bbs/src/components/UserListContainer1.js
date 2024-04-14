
import React,{Component} from "react";
import UserDetail from './UserDetail';

class UserListContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[],
            currentUserId:null
        }
        this.handleAddUser=this.handleAddUser.bind(this);
        this.handleSetCurrentUser=this.handleSetCurrentUserSetCurrentUser.bind(this);
    }
    componentDidMount(){
        var that =this;
        fetch('/path/to/user-api').then(function(response){
            response.json().then(function(data){
                that.setState({users:data})
            });
        });
    }
    // 新增用户
    handleAddUser(user){
        var that =this;
        fetch('/path/to/save-user-api',{
            method:'POST',
            body:JSON.stringify({'username':user})
        }).then(function(response){
            response.json().then(function(newUser){
                that.setState((preState)=>({users:prestate.user.concat([newUser])}))
            });
        });
        // 设置当前选中的用户
    }
}