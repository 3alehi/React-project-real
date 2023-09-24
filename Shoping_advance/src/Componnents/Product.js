import React, { useState, useContext } from 'react';
import data from "./data";
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toastify
import { CardList } from '../Context/CardList';
import Navbar from './Navbar';
import "./Product.css";

export default function Product() {
    const [data1, setData] = useState(data);
    const [Buy, setBuy] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        let newProduct = {
            id: product.id,
            title: product.title,
            category: product.category,
            price: product.price,
            img: product.img,
            desc: product.desc
        };
        setBuy(prevProduct => [...prevProduct, newProduct]);
        toast.success("Product added to cart");
    };

    return (
        <CardList.Provider value={Buy}>
            <div>
                <Navbar />
                <div className='product-all'>
                    {data1.map(product => (
                        <div className='product' key={product.id}>
                            <img className='product-img' src={product.img} alt="" />
                            <h3>{product.title}</h3>
                            <p>{product.desc}</p>
                            <h2>Price: ${product.price}</h2>
                            <center>
                                <button className='btn' onClick={() => addToCart(product)}>Add to cart</button>
                            </center>
                        </div>
                    ))}
                </div>
                <ToastContainer position='bottom-right' />
            </div>
        </CardList.Provider>
    );
}
