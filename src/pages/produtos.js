import React from "react";
import { Link } from "react-router-dom";

function Produtos(){
    return(
        <div>
            <h1>Produtos Page</h1>
            <Link to='/'>
                <button>Voltar para a home</button>
            </Link>
        </div>
        
    )
}

export default Produtos;