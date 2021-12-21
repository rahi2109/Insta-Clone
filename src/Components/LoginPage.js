import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import SignIn from './SignIn'
import SignUp from "./SignUp"


import LoginImage from '../static/images/9364675fb26a.svg'
import InstaLogo from '../static/images/logoinsta.png'
import fbLogo from '../static/images/fb.png'
import appstore from '../static/images/app.png'
import playstore from '../static/images/play.png'
import '../static/css/LoginPage.css'

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
        }
    }
    
    render() {
        const togglePageLogin=()=>{
            if(this.state.isLogin)
                this.setState({isLogin:false})
            else
                this.setState({isLogin:true})
        }
        
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>Abc</Grid>
                    <Grid item xs={6}>
                        <div className="loginPage_main">
                            <div >
                                <img src={LoginImage} width="454px" />
                            </div>


                            <div className="LoginPage_right">
                                <img className="loginPage_logo" src={InstaLogo} />
                                <div className="loginPage_signin">
                                    {
                                        this.state.isLogin ? <SignIn /> : <SignUp />
                                    }

                                    {/* */}




                                    <div className="login_ordiv">
                                        <div className="login_divider"></div>
                                        <div className="login_or">OR</div>
                                        <div className="login_divider"></div>

                                    </div>
                                    <div className="Logib_fb">
                                        <img src={fbLogo} height="15px" style={{ marginRight: "5px" }} />    Login with Facebook
                                    </div>
                                    <div className="Login_fp">
                                        Forgot Password
                                    </div>
                                </div>
                                <div className="loginIn_SignupOptions">
                                    {
                                        this.state.isLogin ?
                                            <div className="login_signin">
                                                Don't have an account?<span style={{ fontWeight: "bold", color: "#0395F6", cursor:"pointer"}} onClick={togglePageLogin}> Sign up</span>
                                            </div> :
                                            <div className="Login_signUp" >
                                                Have an account?<span style={{ fontWeight: "bold", color: "#0395F6" ,cursor:"pointer"}} onClick={togglePageLogin}>Sign In</span>
                                            </div>


                                    }



                                </div>
                                <div className="Login_getApp">
                                    <div>Get the app</div>
                                    <div className="login_getApp_img">
                                        <img src={appstore} width="136px" style={{ marginRight: '10px' }} />
                                        <img src={playstore} width="136px" />
                                    </div>
                                </div>
                            </div>


                        </div>

                    </Grid>
                    <Grid item xs={3}>Ghi</Grid>
                </Grid>
            </div>
        )
    }
}
