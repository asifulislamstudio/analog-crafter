import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
    const location = useLocation()
 
    const navigate = useNavigate();

    const [isShow , setIsShow] = useState(false)

   const {logInUser , signInWithGoogle} = useContext(AuthContext)

   const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(res => {
        toast.success(res.messege)
        navigate(location?.state ? location.state : '/')
    })
    .catch(err => {
        toast.error(err.messege)
    })
}


    const handleSubmit = e => {
        e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginData = {email , password};
    console.log(loginData);
    logInUser(email , password)
    .then(res => {
        console.log(res.user);
        form.reset();
        navigate(location?.state ? location.state : '/')
    })
    .catch(err => {
        console.log(err);
    })

    

    }

    return (
        <div>
            <div className="bg-[#E6E0D8] w-[50%] mx-auto my-48 p-16">
                <h1 className="font-bold text-3xl my-4 text-center font-primary-font">Login Your Account</h1>

               <form onSubmit={handleSubmit} className="">

                <div className="flex flex-col relative gap-y-4">

                <input  
                className="border py-4 rounded-md px-2" placeholder="Enter your Email" 
                type="email" 
                name="email" 
                 />


                <input 
                className="border py-4 rounded-md px-2" 
                placeholder="Enter your password"  
                type={isShow ? "text" : "password"}
                name="password" 
                 />
                <div onClick={()=>setIsShow(!isShow)} className=" absolute top-24 text-xl right-6">
                {
                    isShow? <FaEye ></FaEye> : <FaEyeSlash></FaEyeSlash>
                }
                </div>
                </div>

                 <input type="submit" value="Log In" className="btn w-full my-4 bg-[#67818D] text-white" />
               </form>
              <h3 
              className="font-normal my-2 font-primary-font ">Dont Have Account Please <Link to="/register" 
              className="text-orange-400 font-extrabold">Register</Link></h3>
              <div 
              className="flex justify-center  my-8">----------------OR---------------</div>
               <div 
               className="flex gap-x-4    text-4xl text-[#67818D] justify-center ">
                <button onClick={handleGoogleSignIn}><FaGoogle></FaGoogle></button>
                <Link><FaGithub></FaGithub></Link>
               </div>
            </div>
        </div>
    );
};

export default Login;