
import React, { Component } from 'react'
import '../static/css/HomePage.css'
import Navbar from './Navbar'
import MainContent from './MainContent'
export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MainContent/>
            </div>
        )
    }
}
