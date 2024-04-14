import React,{Component} from "react";
import UserList from './UserList';

class UserListContainer extends Component{
    // 第一个方式 最佳 保证获取数据时，组件已经处于挂载 直接操作DOM安全 渲染一次
    componentDidMount(){
        var that = this;
        fetch('/path/to/user-api').then(function(response){
            response.json().then(function(data){
                that.setState({users:data})
            });
        });
    }
    // 第二个方式 执行的越早意味着服务器数据越能更快返回组件
    componentWillMount(){
        var that =this;
        fetch('/path/to/user-api').then(function(response){
            response.json().then(function(data){
                that.setState({users:data})
            });
        });
    }
    
    // 再次获取服务器api数据
    compenentWillReceivveProps(nextProps){
     var that = this;
        if (nextProps.category!==this.props.category){
            fetch('/path/to/user-api?category='+nextProps.category)
            .then(function(response){
                response.json().then(function(data){
                    that.setState({users:data})
                });
            });
        }
    }
    render(){
        return(
            // 通过props传递users
            <UserList users={this.state.users}/>
        )
    }
}