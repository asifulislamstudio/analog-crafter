import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const loadedProduct = useLoaderData();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const productname = form.productname.value;
       const description = form.description.value;
       const stock = form.stock.value;
       const price = form.price.value;
       const productphotoUrl = form.productphotoUrl.value;
       const updaetProductData = {productname , description , stock, price , productphotoUrl}
       
       fetch(`http://localhost:8000/products/${loadedProduct._id}` , {
        method: "PUT",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(updaetProductData)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            Swal.fire({
                title: "Congratulations",
                text: "Your Data Successfuly Updated",
                icon: "success"
              });
        }
       })
    }

   
    return (
        <div className="">
        <div className="bg-[#E6E0D8]  flex w-[50%] mx-auto my-48 ">
            <div className="w-full p-8">
                <h1 className="font-bold text-3xl my-4 text-center font-primary-font">Update Product</h1>

                <form onSubmit={handleUpdate} className="">
                    <div className="flex flex-col gap-y-2">
                        <input 
                        className="py-2 rounded-md border-2 border-black bg-transparent px-4" 
                        placeholder="Enter Your Product Name" 
                        defaultValue={loadedProduct.productname}
                        required 
                        type="text" 
                        name="productname" />
                        
                        <input 
                        className="py-2 rounded-md border-2 border-black bg-transparent px-4" 
                        placeholder="Enter Your Product Description" 
                        required 
                        type="text" 
                        name="description" />

                        <input 
                        className="py-2 rounded-md border-2 border-black bg-transparent px-4" 
                        placeholder="Enter Your Stock" 
                        required 
                        type="number" 
                        name="stock" />

                        <input 
                        className="py-2 rounded-md border-2 border-black bg-transparent px-4" 
                        placeholder="Enter Your Product Price" 
                        required 
                        type="text" 
                        name="price" />

                        <input 
                        className="py-2 rounded-md border-2 border-black bg-transparent px-4"
                        placeholder="Enter Your Product Picture URL" 
                        required 
                        type="url" 
                        name="productphotoUrl" />

                        <input 
                        className="btn btn-success text-white font-primary-font  text-xl " 
                        type="submit" 
                        value="Add Product" />
                    </div>
                </form>
            </div>
            <div className="bg-sslider bg-cover bg-no-repeat w-full">

        </div>
        </div>
        
    </div>
    );
};

export default UpdateProduct;