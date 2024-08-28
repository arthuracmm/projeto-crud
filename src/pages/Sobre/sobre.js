import React from "react";
import HeaderMain from '../../components/HeaderMain/headerMain'
import FooterMain from '../../components/Footer/footerMain'
import './sobre.css'

function Sobre(){
    return(
        <div>
            <HeaderMain />
            <main>
                <div className="content">
                        <header className="about-header">
                            <h2>Desenvolvido por Arthur Marcelino ©</h2>
                        </header>
                        <div className="line"></div>

                        <p>Este projeto foi desenvolvido por mim, Arthur Marcelino, como parte de um teste para a vaga de front-end júnior. Utilizei React para criar uma aplicação web dinâmica e responsiva. Durante o desenvolvimento, foquei em boas práticas de programação e na criação de interfaces de usuário intuitivas. O projeto demonstra minhas habilidades em JavaScript, gerenciamento de estado, e integração com APIs, além de destacar meu compromisso com a qualidade e a eficiência no desenvolvimento web.</p>
                    
                </div>
            </main>
            <FooterMain />
        </div>
    )
}

export default Sobre;