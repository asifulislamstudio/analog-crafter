import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const AllProduct = () => {

    const lodedProducts = useLoaderData();
    // const [Products , setProducts] = useState(lodedProducts)

    return (
        <div className="grid grid-cols-3 max-w-screen-xl mx-auto my-32">
         {
            lodedProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
         }
        </div>
    );
};

export default AllProduct;