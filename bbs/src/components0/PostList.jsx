import React,{Component} from "react";
import {Link} from "react-router-dom";
import PostsView from "./PostsView";
import PostEditor from "./PostEditor.jsx";
import {get.post} from "../utils/request";
import url from "../utils/url";
import "./PostList.css";


calss PostList extends Component{
    Constructor(props){
        super(props);
        this.state={
            posts:[],
            newPost:false
        };
        this.handleCancel=this.handleCancel.bind(this);
        this.handleSave=this.handleSave.bind(this);
        this.handleNewPost=this.handleNewPost.bind(this);
        this.refreshPostList=this.refreshPostList.bind(this);
    }
    componentDidMount(){
        this.refreshPostList();
    }
    // 获取帖子列表
    refreshPostList(){
        get(url.getPostList()).then(data=>{
            if (!data.error){
                this.setState({
                    posts:data,
                    newPost:false
                });
            }
        });
    }
    
    // 保存帖子
    handleSave(data){
        const postData={...data,author:this.props.userId,vote:0};
        post(url.createPost(),postData).then(data=>{
            if (!data.error){
                this.refreshPostList();
            }
        });
    }
    // 取消新建帖子
    handleCancel(){
        this.setState({
            newPost:false
        });
 // 新建帖子
 handleNewPost(){
    this.setState({
        newPost:true
    });
 }
            render(){
                const {userId}=this.props;
                return(
                    <div className="postList">
                        <div>
                            <h2>帖子列表</h2>
                    // 只有登录才显示
                    {userId ? <button onClick={this.handleNewPost}>发贴</button>:null}
                        </div>
                    // 若当前正创建新帖子，则渲染
                    {this.state.newPost ?(
                        <PostEditor onSave={this.handleSave}onCancel={this.handleCancel}/>
                    ):null}
                    // 显示帖子列表数据
                    <PostsView posts={this.state.posts}/>
                    </div>
                );
            }
    }
    
}
export default PostList;