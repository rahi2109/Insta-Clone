import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import '../static/css/PostPage.css'
import postImage from '../static/images/post.jpg'
import react from '../static/images/love.svg'
import comment from '../static/images/comment.svg'
import share from '../static/images/share.svg'

export default class PostPage extends Component {
    constructor(props){
        super(props);
        this.state={
            commentList:[]
         }
    }
    componentDidMount(){
        this.getComment();
    }
    getComment=()=>{
        // Api call
            let commentData=[
                {
                "username": "abcd",
                "commentId":"1",
                "timeStamp":"1234",
                "description": "comment"
                },
        ];
            this.setState({commentList:commentData})
    }
    render() {
        return (
            <div className="post_main">
                {/* header */}
                <div className="post_header">
                    <Avatar className="post_user_img" src="" />
                    <div className="post_username" >{this.props.username}</div>
                </div>
                {/* images */}
                <div>
                    <img className="post_img" src={this.props.postImage} />
                </div>
                {/* like share */}
                <div style={{ marginLeft: '10px' }}>
                    <img className="post_react" src={react} />
                    <img className="post_react" src={comment} />
                    <img className="post_react" src={share} />
                    <div style={{marginLeft:"15px",fontWeight:"bold"}}>
                        {this.props.likes} likes
                    </div>
                </div>
                

                {/* Comment */}
                <div >
                    {this.state.commentList.map((item,index)=>(
                        <div className="post_Comment">{item.username}: {item.description}</div>
                    ))}
                   
                    <input type="text" placeholder="Add a comment" className="add_comment"/>

                </div>
            </div>
        )
    }
}
