import React from 'react'
import './home.css'
import { Link } from "react-router-dom"
const Homepage = () => {
    return (

        <section id='nav'>
            <Link to="/">Createusers</Link>
            <Link to="/users">Users</Link>
        </section>

    )
}
export default Homepage