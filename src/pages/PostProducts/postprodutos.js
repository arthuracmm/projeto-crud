import React from "react";
import HeaderMain from '../../components/HeaderMain/headerMain'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import './postprodutos.css'

const validationPost = yup.object().shape({
    title: yup.string().required('O campo e obrigatorio').max(90, 'O campo precisa ter menos que 90 caracteres'),
    description: yup.string().required('O campo e obrigatorio').max(200, 'O campo precisa ter menos que 200 caracteres'),
    content: yup.string().required('O campo e obrigatorio').max(500, 'O campo precisa ter menos que 500 caracteres')
})

function Produtos(){

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationPost)
    })
    const addProduto = data => console.log(data)

    return(
        <div>
            <HeaderMain />

            <main>
                <div className="card-post">
                    <h1>Criar Postagem</h1>

                    <div className="line-post"></div>

                    <div className="card-body-post">

                        <form className="form" onSubmit={handleSubmit(addProduto)}>

                            <div className="fields">
                                <label>Titulo</label>
                                <input type="text" name="title" {...register('title')}/>
                                <p className="error-message">{errors.title?.message}</p>
                            </div>
                            
                            <div className="fields">
                                <label>Descrição</label>
                                <input type="text" name="description" {...register('description')}/>
                                <p className="error-message">{errors.description?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Conteudo</label>
                                <textarea type="text" name="content" {...register('content')}/>
                                <p className="error-message">{errors.content?.message}</p>
                            </div>

                            <div className="btn-post">
                                <input type="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
        
    )
}

export default Produtos;