import { useContext, useState } from "react";
import Slider from "../../../Components/Slider/Slider";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import Swal from "sweetalert2";



const Home = () => {

    const products = useLoaderData();
    const [lodedProducts , setLodedProducts] = useState(products)

   

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:8000/products/${id}`, {
                method: "DELETE",
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      const remain = products.filter(product => product._id !== id)
                      setLodedProducts(remain);
                      
                }
              })
            }
          });
    }

    return (

        <div>
            <Slider></Slider>
            <div className="flex justify-center mt-16 font-secondary-font font-extrabold text-5xl">
                <h1>All Products</h1>
            </div>
            <div className="my-8 p-8 grid grid-cols-3 gap-x-4  max-w-screen-xl mx-auto">

                {
                    lodedProducts.map(product => <div key={product._id}>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src={product.productphotoUrl}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.productname}</h2>
                                <p>{product?.description.slice(0, 50)}</p>
                                <h2 className="font-semibold text-green-900 text-2xl font-secondary-font"> Price: ${product?.price}</h2>
                                <div className="card-actions justify-end">
                                    <div className="flex gap-x-4">
                                        <button className="btn  font-bold text-white text-base uppercase hover:bg-emerald-600 bg-[#f58a6b] ">Add To Cart</button>
                                        <button onClick={() => handleDelete(product._id)} className="btn btn-error" ><MdDeleteForever /> </button>
                                        <Link to={`/update/${product._id}`}>
                                        <button 
                                        // this is Edit Button
                                        className="btn btn-warning"><MdEditSquare></MdEditSquare></button>
                                        </Link>
                                        
                                        
                                        <Link
                                            to={`/product/${product._id}`}
                                        >
                                            <button
                                                className="btn btn-primary"><FaEye></FaEye></button></Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Product Section End */}
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;