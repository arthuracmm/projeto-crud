import React, { useEffect, useState } from "react";
import HeaderMain from '../../components/HeaderMain/headerMain'
import FooterMain from '../../components/Footer/footerMain'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const validacaoPost = yup.object().shape({
    title: yup.string().required('Título é obrigatório'),
    price: yup.number().required('Valor é obrigatório').positive('O valor deve ser positivo'),
});

function Edit(){

    const { id } = useParams()

    let navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, reset} = useForm({
        resolver: yupResolver(validacaoPost)
    });

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then((response) => {
            console.log(response.data);
            reset(response.data);
        })
        .catch(error => {
            console.error('Erro ao buscar produto', error);
        });
    }, [id, reset]);
    
    const addProduto = async (data) => {
        try {

            const DataFormatada = {
                ...data,
                images: setImageUrl()
            };
    
            await axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, DataFormatada);
            console.log('editado com sucesso')
            navigate('/')
        } catch (error) {
            console.error('Erro ao alterar produto', error.response?.data || error.message);
        }
    };

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
                                <input type="text" name="title" {...register('title')} />
                                <p className="error-message">{errors.title?.message}</p>
                            </div>

                            <div className="fields">
                                <label>Valor</label>
                                <input type="text" name="price" {...register('price')} />
                                <p className="error-message">{errors.price?.message}</p>
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
            <FooterMain />
        </div>
    )
}

export default Edit;