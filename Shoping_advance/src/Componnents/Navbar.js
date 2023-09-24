import React, { useContext, useState } from 'react';
import { IsShow } from '../Context/IsShow';
import { CardList } from '../Context/CardList';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoBagHandle } from 'react-icons/io5';
import './Navbar.css';

export default function Navbar() {
    const show = useContext(IsShow);
    const listcard = useContext(CardList);
    const [isShow, setisShow] = useState(show);

    // Calculate the total price of items in the cart
    const totalPrice = listcard.reduce((total, product) => total + product.price, 0);

    return (
        <>
            <ul className='navbar'>
                <div className='brand'>
                    <h3>Slavik Masih</h3>
                </div>
                <div className='icon'>
                    <IoBagHandle
                        onClick={() => {
                            setisShow(!isShow);
                        }}
                    />{' '}
                    <span className='addTocar'>{listcard.length}</span>
                </div>
            </ul>
            {isShow && (
                <div className='Card'>
                    <AiFillCloseCircle
                        className='icon close'
                        onClick={() => {
                            setisShow(!isShow);
                        }}
                    />
                    {listcard.length === 0 ? (
                        <h3 className='null'>سبد خرید شما خالی می‌باشد</h3>
                    ) : (
                        <>
                            {listcard.map((product) => (
                                <div className='product-card' key={product.id}>
                                    <img className='card-img' src={product.img} alt='' />
                                    <h5>{product.title}</h5>
                                    <h5>{product.price}</h5>
                                </div>
                            ))}
                            <center>${totalPrice}</center>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
