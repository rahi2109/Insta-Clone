import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import StatusBar from './StatusBar'
import AllPost from './AllPost'
import '../static/css/MainContent.css'
export default class MainContent extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6}>
                        <div>
                            <StatusBar/>
                            <AllPost/>
                        </div>

                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                
            </div>
        )
    }
}
