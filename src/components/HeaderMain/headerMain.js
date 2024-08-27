import React from "react"
import { Link } from "react-router-dom"
import './headerMain.css'

function HeaderMain(){
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to = '/' className="link">
                        <h1>Loja E-Commerce</h1>
                    </Link>
                </div>

                <div className="headerBtns">

                    <Link to = '/' className="link">
                        <p>Home</p>
                    </Link>

                    <Link to = '/produtos' className="link">
                        <p>Produtos</p>
                    </Link>

                    <Link to = '/sobre' className="link">
                        <p>Sobre</p>
                    </Link>

                    <Link to = '/postprodutos' className="link">
                        <p>Postar</p>
                    </Link>

                </div>
            </div>
        </header>
    )
}

export default HeaderMain