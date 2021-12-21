import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar'
import StatusImg from '../static/images/pp1.png'
import '../static/css/StatusBar.css'
import uploadImage from '../static/images/upload.png'

export default class StatusBar extends Component {
    constructor(){
        super();
        this.state={
                StatusList : []
        }
    }
    componentDidMount(){
        this.getData();
    }
        getData=()=>{
            let data=[
                {
                    "username": 'Anshuman',
                    "imgUrl":"../static/images/pp1.png"

                },
                {
                    "username": 'Rahi',
                    "imgUrl":"../static/images/pp1.png"

                },
                {
                    "username": 'Noone',
                    "imgUrl":"../static/images/pp1.png"

                },
                {
                    "username": 'unknown',
                    "imgUrl":"../static/images/pp1.png"

                },
                {
                    "username": 'Anshuman',
                    "imgUrl":"../static/images/pp1.png"

                },
                {
                    "username": 'Rahi',
                    "imgUrl":"../static/images/pp1.png"

                },
                {
                    "username": 'Noone',
                    "imgUrl":"../static/images/pp1.png"

                },
                {
                    "username": 'unknown',
                    "imgUrl":"../static/images/pp1.png"

                },
            ]
            this.setState({StatusList:data})
        }
    
    render() {
        return (
            <div className="statusBar_main">
                 <div className="status_scroll" style={{marginTop:"8px"}}>
                    <Avatar src={uploadImage}  style={{border:'none',width:"95px",height:"95px",marginRight:'-20px'}} />
                </div>
                {
                    this.state.StatusList.map((item,index)=>(
                        <div className="status_scroll">
                        <Avatar className="status_img" src={StatusImg}/>
                        <div className="status_username">{item.username}</div>
                    </div>

        ))
                }
               
                
            </div>
        )
    }
}
