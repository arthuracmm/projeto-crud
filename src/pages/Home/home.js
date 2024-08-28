import React, { useEffect, useState } from "react";
import HeaderMain from '../../components/HeaderMain/headerMain'
import FooterMain from '../../components/Footer/footerMain'
import { Link } from "react-router-dom";
import './home.css'
import axios from "axios";

const ITEMS_PER_PAGE = 5;

function Home(){

    const[posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() =>{
        // puxando Api para o projeto
        axios.get('https://api.escuelajs.co/api/v1/products')
        .then((response) =>{
            setPosts(response.data)
        })
        .catch(() =>{
            console.log('deu errado')
        })
    }, [])

    function deletePost(id){
        axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`)

        setPosts(posts.filter(post => post.id !== id))
    }

    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    };

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentPosts = posts.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

    return(
        <div>
            <HeaderMain />
            
            <main>
                
                <div className="cards">
                    
                    {currentPosts.map((post) => {
                        return (
                            <div className="card">

                                <div className="left-card">
                                    <Link to = {{pathname:`/produtos/${post.id}`}}>
                                    <img src={post.images[0]}/>
                                    </Link>
                                </div>

                                <div className="right-card">
                                    <header className="homeHeader">
                                        <h2>{truncateText(post.title, 30)}</h2>
                                        <p>R${post.price},00</p>
                                    </header>
                                    <div className="line"></div>

                                    <p>{truncateText(post.description, 90)}</p>

                                    <div className="btns">

                                        <div className="btnEdit">
                                            <Link to = {{pathname:`/edit/${post.id}`}}>
                                            <button className="btn">Editar</button>
                                            </Link>
                                        </div> 

                                        <div className="btnDelete">
                                            <button className="btn" onClick={() => {deletePost(post.id)}}>Deletar</button>
                                        </div>
                                
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    

                </div>
            </main>
            <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                        key={index}
                        className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => changePage(index + 1)}
                        >
                        {index + 1}
                        </button>
                    ))}
            </div>
            <FooterMain />
        </div>
    )
}

export default Home;