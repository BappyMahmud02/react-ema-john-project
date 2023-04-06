import React from 'react';
import './REviewitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { deleteShoppingCart } from '../../utilities/fakedb';

const Reviewitem = ({ product, handleRemoveFromCart }) => {
    const { name, id, price, quantity, img } = product;
    return (
        <div className='review-item '>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>name:{name}</p>
                <p>price: <span className='orange-text'>$ {price}</span></p>
                <p>order quantity: <span className='orange-text'>$ {quantity}</span></p>
            </div>
                <button onClick={() => handleRemoveFromCart(id)} className='btn-delet'>
                    <FontAwesomeIcon className='delet-icon' icon = {faTrashAlt}/>
                </button>
        </div>
    );
};

export default Reviewitem;
