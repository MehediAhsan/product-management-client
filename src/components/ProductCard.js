import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product, handleDelete}) => {
    const { name, photoURL, quantity, price} = product;
    return (
        <div className='flex justify-between items-center p-5 border w-9/12 mx-auto'>
            <img className='w-44' src={photoURL} alt="" />
            <h1 className='text-2xl font-semibold'>{name}</h1>
            <p className='text-xl font-semibold'>{quantity}</p>
            <p className='text-xl font-semibold'>{price}</p>

           <div className='flex gap-2'>
            <Link to={`/update/${product._id}`}>
                <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update</button>
            </Link>

            <button onClick={ () => handleDelete(product)} type='submit' className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Delete</button>
           </div>
        </div>
    );
};

export default ProductCard;