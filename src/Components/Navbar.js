import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid"
import Avatar from '@material-ui/core/Avatar'
import '../static/css/Navbar.css'
import InstaLogo from '../static/images/logo.png'
import home from '../static/images/home.svg'
import find from '../static/images/find.svg'
import react from '../static/images/love.svg'
import message from '../static/images/message.svg'
import ProfilePic from '../static/images/pp1.png'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar_bar">
                    <Grid container>
                        <Grid item xs={2}>A</Grid>
                        <Grid item xs={3}>
                            <img src={InstaLogo} className="navbar_logo"/>

                        </Grid>
                        <Grid item xs={3}>

                            <input className="navbar_searchbar" type="text" placeholder="Search"/>
                        </Grid>
                        <Grid item xs={3} style={{display:"flex"}}>
                            
                            <img src={home}   className="navbar_img" width="25px"/>
                            <img src={message}className="navbar_img" width="25px"/>
                            <img src={find}   className="navbar_img" width="25px"/>
                            <img src={react}  className="navbar_img" width="25px" />
                            <Avatar src={ProfilePic} className="navbar_img" style={{maxWidth:"25px",maxHeight:"25px"}}/>

                        </Grid>
                        <Grid item xss={1}></Grid>
                    </Grid>

                </div>
            </div>
        )
    }
}
