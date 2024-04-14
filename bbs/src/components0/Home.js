import React from "react";

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const{match,location}=this.props;
        const{username}=this.state;
        return (
            <div>
                <Header
                username={usernamne}
                onLogout={this.handleLogout}
                location={location}
                />
            </div>
            // 帖子列表路由
            <Route 
            path={match.url}
            exact
            render={props=><PostList username={username}{...props}/>}
            />
            // 帖子详情路由
            <Route
            path={`${match.url}/:id`}
            render={props=><Post username={username}{...props}/>}
            />
        );
    }

}