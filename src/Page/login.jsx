import React from 'react'
import './Login.css'
import { access_url } from '../spotifyAPI'
function Login() {
    return (
        <div className='login'>
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
                className='logo'
            />
            <div className='content'>
                <h1>Welcome To <span style={{ color: "#1db954" }}>Spotify</span> Clone</h1>
                <a href={access_url}>Login With Spotify</a>
            </div>
        </div>
    )
}

export default Login