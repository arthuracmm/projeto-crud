import React from "react";
import HeaderMain from '../../components/HeaderMain/headerMain';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import './postprodutos.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

// Atualize a validação para aceitar um array de URLs
const validacaoPost = yup.object().shape({
    title: yup.string().required('Título é obrigatório'),
    price: yup.number().required('Valor é obrigatório').positive('O valor deve ser positivo'),
    description: yup.string().required('Descrição é obrigatória'),
    categoryId: yup.number().required('Categoria é obrigatória').positive('A categoria deve ser positiva'),
});

function Produtos() {

    let navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validacaoPost)
    });

    const addProduto = async (data) => {
        try {
            const formattedData = {
                ...data,
                images: data.images.split(',').map(url => url.trim())
            };
            await axios.post('https://api.escuelajs.co/api/v1/products/', formattedData);
            console.log('Produto adicionado com sucesso');
            navigate.push('/')
        } catch (error) {
            console.error('Erro ao adicionar produto', error.response?.data || error.message);
        }
    };

    return (
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
                                <input type="text" name="title" {...register('title')} />
                                <p className="error-message">{errors.title?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Valor</label>
                                <input type="text" name="price" {...register('price')} />
                                <p className="error-message">{errors.price?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Descrição</label>
                                <input type="text" name="description" {...register('description')} />
                                <p className="error-message">{errors.description?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Categoria</label>
                                <input type="text" name="categoryId" {...register('categoryId')} />
                                <p className="error-message">{errors.categoryId?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Imagens (separadas por vírgulas)</label>
                                <input type="text" name="images" {...register('images')} />
                                <p className="error-message">{errors.images?.message}</p>
                            </div>

                            <div className="btn-post">
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Produtos;
