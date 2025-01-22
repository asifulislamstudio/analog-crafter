import { useLoaderData } from "react-router-dom";


const SingleProduct = () => {
    const product = useLoaderData()
    return (
        <div className="max-w-screen-xl mx-auto my-8">
            <div className="flex p-8 gap-x-4 justify-center  items-start bg-[#E6E0D8]">
                <div className="flex-1">
                    <img src={product.productphotoUrl} alt="" />
                </div>


                <div className="flex-1">

                    <h1 className="font-primary-font font-bold text-5xl">{product.productname}</h1>

                    <h2 className="font-secondary-font text-4xl font-semibold my-4 text-[#f58a6b]">${product.price}</h2>

                    <p className="font-primary-font text-xl text-left">{product.description}</p>

                    <h3 className="font-bold border p-1 border-r-orange-400 bg-yellow-700 text-xl text-white  my-4 ">Stock: {product.stock}</h3>

                    <div className="flex justify-around">
                    <button className="btn btn-wide hover:bg-white hover:animate-bounce hover:text-black mr-2 bg-lime-800 text-white text-xl items-center font-primary-font uppercase">Buy Now</button>
                    <button className="btn hover:animate-bounce btn-wide hover:bg-black mr-2 bg-[#F58A6B] text-white text-xl items-center font-primary-font uppercase">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;