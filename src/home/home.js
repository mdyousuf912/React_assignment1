import React, { Component } from 'react'
import Styles from "./home.module.css"
import {Link} from "react-router-dom"

export class Home extends Component {
    render() {
        return (
            <div className = {Styles.main}>
                <Link to = "/pizza"><button>Visit Our Pizza Store</button></Link>

                <Link to = "/product"><button>Visit Our Product Store</button></Link>

            </div>
        )
    }
}

export default Home
