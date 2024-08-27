import React from "react";
import HeaderMain from '../../components/HeaderMain/headerMain'
import { useForm } from "react-hook-form"

function Produtos(){

    const {register, handleSubmit, formState: {erros}} = useForm()

    return(
        <div>
            <HeaderMain />

            <h1>Produtos aqui</h1>
        </div>
        
    )
}

export default Produtos;