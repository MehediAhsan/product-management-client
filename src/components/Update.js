import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const storedProduct = useLoaderData();
    const [product, setProduct] = useState(storedProduct);
    const navigate = useNavigate();

    const handleUpdateProduct = event => {
        event.preventDefault();
        console.log(product);
        axios.put(`http://localhost:5000/products/${storedProduct._id}`, product)
        .then ( res => {
            if(res.data.modifiedCount > 0){
                Swal.fire(
                    'Updated Product!',
                    'Successfully done!',
                    'success'
                )
                navigate('/products');
            }            
        })
        .then( err => console.log(err))
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newProduct = {...product};
        newProduct[field] = value;
        setProduct(newProduct)
    }

    return (
        <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Update your product</h1>
            </div>
            <div className="lg:w-1/3 md:w-2/3 mx-auto">
            <div className="flex flex-col m-2 border-2">
                <form onSubmit={handleUpdateProduct}>
                    <div className="px-4 py-2 w-full">
                    <div className="relative">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-800">Prouct Name</label>
                        <input onChange={handleInputChange} defaultValue={storedProduct.name} type="text" id="name" name="name" placeholder='product name' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
                    </div>
                    </div>
                    <div className="px-4 py-2 w-full">
                    <div className="relative">
                        <label htmlFor="photoURL" className="leading-7 text-sm text-gray-800">Product Photo URL</label>
                        <input onChange={handleInputChange} defaultValue={storedProduct.photoURL} type="text" id="photoURL" name="photoURL" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='photo URL' required/>
                    </div>
                    </div>
                    <div className="px-4 py-2 w-full">
                    <div className="relative">
                        <label htmlFor="quantity" className="leading-7 text-sm text-gray-800">Quantity</label>
                        <input onChange={handleInputChange} defaultValue={storedProduct.quantity} type="text" id="quantity" name="quantity" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='quantity' required/>
                    </div>
                    </div>
                    <div className="px-4 py-2 w-full">
                    <div className="relative">
                        <label htmlFor="price" className="leading-7 text-sm text-gray-800">Price</label>
                        <input onChange={handleInputChange} defaultValue={storedProduct.price} type="text" id="price" name="price" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='price' required/>
                    </div>
                    </div>
                    <div className="p-2 w-full">
                    <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Product</button>
                    </div>
                </form>  
                
            </div>
            </div>
        </div>
        </section>
    );
};

export default Update;