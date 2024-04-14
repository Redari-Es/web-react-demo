import React,{Component} from "react"
import PostItem from "./PostItem";
// 自己定义数据
const data=[
    {title:"大家一起来讨论React叭",author:"aaa",date:"2023-10-17 11:00"},
    {title:"前端框架，你最爱哪一个",author:"aaa",date:"2023-10-17 11:00"},
    {title:"Web App的时代已经到来叭",author:"aaa",date:"2023-10-17 11:00"},
]
class PostList extends Component{
    render(){
        return (
            <div>
                帖子列表：
            <ul>
                {data.map(item=>
                    <PostItem 
                    
                        title={item.title}
                        author={item.author}
                        date={item.date}
                    />
                    )}
            </ul>
            </div>
        );
    }
}
export default PostList;