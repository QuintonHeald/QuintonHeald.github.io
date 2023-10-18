import React from 'react'
import { Instagram } from '@material-ui/icons'
import { LinkedIn } from '@material-ui/icons'
import { GitHub } from '@material-ui/icons'
import "../styles/Footer.css";

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <Instagram />
                <GitHub />
                <LinkedIn />
            </div>
            <p> &copy; 2023 QuintonHeald.github.io </p>
        </div>
    )
}

export default Footer
