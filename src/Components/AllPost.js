import React, { Component } from 'react'
import uploadImage from '../static/images/statusadd.png'
import '../static/css/Allpost.css'
import PostPage from './PostPage'
export default class AllPost extends Component {
    constructor(props){
        super(props);
        this.state={ 
          postArray:[]
        }
    }

    componentDidMount(){
        this.getPost();
    }
    getPost=()=>{
        let data=[
            {
                "postId":"1234",
                "username":"Rash",
                "postImgurl":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
                "timeStamp":"333",
                "likes":"1234"
            },
            {
                "postId":"1234",
                "username":"Rash",
                "postImgurl":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
                "timeStamp":"333",
                "likes":"1234"
            },
            {
                "postId":"1234",
                "username":"Rash",
                "postImgurl":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
                "timeStamp":"333",
                "likes":"1234"
            },
            {
                "postId":"1234",
                "username":"Rash",
                "postImgurl":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
                "timeStamp":"333",
                "likes":"1234"
            },
        ]
        this.setState({postArray:data})
     
    }
    
    render() {
        
        return (
            <div >
                <div style={{margin:"25px",textAlign:"center",width:" 615px"}}>
                    <img src={uploadImage} className="post_upload" />
                </div>
                {
                   
                    this.state.postArray.map((item,index)=>(
                        <PostPage id={item.postId} username={item.username} postImage={item.postImgurl} likes={item.likes}/>

                    ))
                }
               
                
              
            </div>
        )
    }
}
