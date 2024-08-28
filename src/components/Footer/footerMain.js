import React from "react"
import { Link } from "react-router-dom"
import './footerMain.css'

function FooterMain(){
    return (
        <footer>
            <div className="footer-container">
                <div className="logo">
                    <Link to = '/' className="link">
                        <h1>Arthur Marcelino ©</h1>
                        <p>github.com/arthuracmm</p>
                    </Link>
                </div>

                <div className="footerBtns">

                    <Link to = 'https://www.linkedin.com/in/arthur-marcelino-b311752b8/' className="link">
                        <p>Linkedin</p>
                    </Link>

                    <Link to = 'https://github.com/arthuracmm' className="link">
                        <p>GitHub</p>
                    </Link>

                    <Link to = 'mailto:arthurcesarmarcelino@gmail.com' className="link">
                        <p>Email</p>
                    </Link>

                </div>
            </div>
        </footer>
    )
}

export default FooterMain