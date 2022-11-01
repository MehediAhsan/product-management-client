import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import Swal from 'sweetalert2';
import axios from 'axios';

const Products = () => {
    const products = useLoaderData();
    const [displayProducts, setDisplayProducts] = useState(products);

    const handleDelete = product => {
        console.log(product);
        Swal.fire({
            title: 'Are you sure?',
            text: `You won't be able to revert this Product ${product.name}!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/products/${product._id}`)
                .then( res => {
                    
                    if(res.data.deletedCount > 0){       
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        

                        const remainingProducts = displayProducts.filter( pd => pd._id !== product._id);
                        setDisplayProducts(remainingProducts);
                    }
                })
            }
          })
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8'>Total Products: {displayProducts.length}</h1>
            <div>
                {
                    displayProducts.map(product => <ProductCard key={product._id} product={product} handleDelete={handleDelete}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;