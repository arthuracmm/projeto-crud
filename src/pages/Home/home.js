import React from "react";
import HeaderMain from '../../components/HeaderMain/headerMain'
import { Link } from "react-router-dom";
import './home.css'

function Home(){
    return(
        <div>
            <HeaderMain />
            <main>
                <div className="cards">
                    <div className="card">
                        <header className="homeHeader">
                            <h2>Consumindo API</h2>
                        </header>
                        <div className="line"></div>

                        <p>Teste com texto aqui para ver como fica e etc.</p>

                        <div className="btns">

                            <div className="btnEdit">
                                <Link to = '/edit'>
                                <button className="btn">Editar</button>
                                </Link>
                            </div>

                            <div className="btnVer">
                                <Link to = '/sobre'>
                                <button className="btn">Ver Mais</button>
                                </Link>
                            </div>

                            <div className="btnDelete">
                                <Link to = '/delete'>
                                <button className="btn">Deletar</button>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}

export default Home;