import React from "react";
import HeaderMain from '../../components/HeaderMain/headerMain'

function Sobre(){
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

                        <p>Teste com texto aqui para ver como fica e etc.Teste com texto aqui para ver como fica e etc.Teste com texto aqui para ver como fica e etc.Teste com texto aqui para ver como fica e etc.</p>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}

export default Sobre;