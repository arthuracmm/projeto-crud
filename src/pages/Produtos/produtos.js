import React, { useEffect, useState } from "react";
import HeaderMain from '../../components/HeaderMain/headerMain'
import { Link } from "react-router-dom";
import './produtos.css'
import axios from "axios";

const ITEMS_PER_PAGE = 5;

function Produtos(){

    const[posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [originalPosts, setOriginalPosts] = useState([]);
    const [sortPrice, setSortPrice] = useState(false);
    const [sortName, setSortName] = useState(false);

    useEffect(() =>{
        // puxando Api para o projeto
        axios.get('https://api.escuelajs.co/api/v1/products')
        .then((response) =>{
            setPosts(response.data)
            setOriginalPosts(response.data)
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

    const handleSortChange = () => {
        let sortedPosts = [...originalPosts];
    
        if (sortPrice) {
          sortedPosts.sort((a, b) => a.price - b.price);
        }
    
        if (sortName) {
          sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
        }
    
    setPosts(sortedPosts);
    
    };

    useEffect(() => {
        handleSortChange();
    }, [sortPrice, sortName]);


    return(
        <div>
            <HeaderMain />
            
            <main>
                
                <div className="buttons-filters2">
                <label>
                    <input
                    type="checkbox"
                    checked={sortPrice}
                    onChange={() => setSortPrice(!sortPrice)}
                    />
                    Filtrar Por Menor Valor
                </label>
                <label>
                    <input
                    type="checkbox"
                    checked={sortName}
                    onChange={() => setSortName(!sortName)}
                    />
                    Filtar Por Ordem
                </label>
                </div>
                
                <div className="cards2">
                    
                    {currentPosts.map((post) => {
                        return (
                            <div className="card2">

                                <div className="left-card2">
                                    <img src={post.images[0]} className="img-1"/>
                                    <div className="little-images">
                                        <img src={post.images[1] ? post.images[1] : post.images[0]} className="img-3"/>
                                        <img src={post.images[2] ? post.images[2] : post.images[0]} className="img-3"/>
                                        <img src={post.images[3] ? post.images[3] : post.images[0]} className="img-3"/>
                                    </div>
                                </div>

                                <div className="right-card2">
                                    <header className="homeHeader2">
                                        <h2>{post.title}</h2>
                                        <p>R${post.price},00</p>
                                    </header>
                                    <div className="line2"></div>

                                    <p>{truncateText(post.description, 200)}</p>

                                    <div className="btns2">

                                        <div className="btnEdit2">
                                            <Link to = {{pathname:`/edit/${post.id}`}}>
                                            <button className="btn2">Editar</button>
                                            </Link>
                                        </div>
                                        <div className="btnDelete2">
                                            <button className="btn2" onClick={() => {deletePost(post.id)}}>Deletar</button>
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
        </div>
    )
}

export default Produtos;