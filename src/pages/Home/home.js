import React, { useEffect, useState } from "react";
import HeaderMain from '../../components/HeaderMain/headerMain'
import { Link } from "react-router-dom";
import './home.css'
import axios from "axios";

function Home(){

    const[posts, setPosts] = useState([])

    useEffect(() =>{
        axios.get('https://api.escuelajs.co/api/v1/products')
        .then((response) =>{
            setPosts(response.data)
        })
        .catch(() =>{
            console.log('deu errado')
        })
    }, [])

    return(
        <div>
            <HeaderMain />
            <main>
                <div className="cards">
                    
                    {posts.map((post, key)=> {
                        return (
                            <div className="card">

                                <div className="left-card">
                                    <img src={post.images[0]}/>
                                </div>

                                <div className="right-card">
                                    <header className="homeHeader">
                                        <h2>{post.title}</h2>
                                    </header>
                                    <div className="line"></div>

                                    <p>{post.description}</p>

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
                        )
                    })}
                    
                    
                    
                </div>
            </main>
        </div>
    )
}

export default Home;