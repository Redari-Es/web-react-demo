
import React,{Component} from "react";

function UserDetail(props){
    return(
        <div>
            {props.currentUser?
            (
            <div>用户姓名：{props.currentUser.name}</div>
            <div>用户年龄：{props.currentUser.ageage}</div>
            <div>用户联系方式：{props.currentUser.phone}</div>
            <div>家庭住址：{props.currentUser.address}</div>
            )
                :''
        }
        </div>
    )
}