import React,{Component} from "react";
import PostItem1 from "./PostItem1";
import './css/PostList.css';


class PostList1 extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
        };
        this.timer=null; // 定时器
        this.handleVote=this.handleVote.bind(this); // ES6 class中必须手动绑定方法this的指向
    }
    componentDidMount(){
        // 用setTimeout 模拟异步从服务器端获取数据
        this.timer=setTimeout(()=>{
            this.setState({
                posts:[
                    {id:1,title:"哈哈哈",author:"aaaa",date:"2023-10-17 10:00",vote:0},
                    {id:2,title:"哈哈哈",author:"aaaa",date:"2023-10-17 10:00",vote:0},
                    {id:3,title:"哈哈哈",author:"aaaa",date:"2023-10-17 10:00",vote:0},
                    {id:4,title:"哈哈哈",author:"aaaa",date:"2023-10-17 10:00",vote:0},
                ]
            });
        },1000);
    }
    componentWillUnmount(){
        if (this.timer){
            clearTimeout(this.timer); // 清除定时器
        }
    }
    handleVote(id){
        // 根据帖子id进行过滤，找到待修改vote属性的帖子，返回新的posts对象
        const posts=this.state.posts.map(item=>{
            const newItem = item.id===id?{...item,vote:++item.vote}:item;
            return newItem;
        });
        // 使用新的posts对象设置state
        this.setState({
            posts
        });
    }
    render(){
       return(
        <div >
            <h2>贴子列表：</h2>
            <ul>
                {this.state.posts.map(item=>
                    <PostItem1
                    post={item}
                    onVote={this.handleVote}/>
                    )}
            </ul>
        </div>
       ); 
    }
}

export default PostList1;