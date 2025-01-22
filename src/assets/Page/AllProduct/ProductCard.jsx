import React from 'react';
import { FaEye } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={product.productphotoUrl}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.productname}</h2>
                    <p>{product?.description.slice(0, 50)}</p>
                    <div className="card-actions justify-end">
                        
                        <Link
                        to={`/product/${product._id}`}
                        >    
                        <button      
                        className="btn btn-primary"><FaEye></FaEye></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;