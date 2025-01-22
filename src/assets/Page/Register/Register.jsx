import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";
const Register = () => {

    const [isShow , setIsShow] = useState(false)

   const {creatUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    const registerData = {email , password, photoUrl};

    const letter = /[a-zA-Z]/; // Matches any uppercase or lowercase letter
    const number = /[0-9]/;    // Matches any digit (0-9)

    if (password.length < 6 || !letter.test(password) || !number.test(password)) {
        creatUser(email , password)
        .then(res => {
            console.log(res.user);
            fetch('http://localhost:8000/users/', {
                method: "POST",
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(registerData)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    toast.success('Registration Success')
                }
            })
        })
        .catch(error => {
            console.log(error.message);
        })
    }else{
        toast.error('Password does not meet the required conditions')
    }
    
    
    }
    return (
        <div>
            <div className="bg-[#E6E0D8] w-[50%] mx-auto my-48 p-16">
                <h1 className="font-bold text-3xl my-4 text-center font-primary-font">Register Your Account</h1>

               <form onSubmit={handleRegister} className="">

                <div className="flex flex-col relative gap-y-4">

                <input  
                className="border py-4 rounded-md px-2" placeholder="Enter your Email" 
                type="email" 
                name="email" 
                 />

                <input  
                className="border py-4 rounded-md px-2" placeholder="Enter your Photo URL" 
                type="url" 
                name="photoUrl" 
                 />
               

                <input 
                className="border py-4 rounded-md px-2" 
                placeholder="Enter your password"  
                type={isShow ? "text" : "password"}
                name="password" 
                 />
                <div onClick={()=>setIsShow(!isShow)} className=" absolute top-[167px] text-xl right-6">
                {
                    isShow? <FaEye ></FaEye> : <FaEyeSlash></FaEyeSlash>
                }
                </div>
                </div>
                
                 <input type="submit" value="Register" className="btn w-full my-4 bg-[#67818D] text-white" />
               </form>
              <h3 
              className="font-normal my-2 font-primary-font ">Alredy Have Account Please <Link to="/login" 
              className="text-orange-400 font-extrabold">Login</Link></h3>
              <div 
              className="flex justify-center  my-8">----------------OR---------------</div>
               <div 
               className="flex gap-x-4    text-4xl text-[#67818D] justify-center ">
                <Link><FaGoogle></FaGoogle></Link>
                <Link><FaGithub></FaGithub></Link>
               </div>
            </div>
        </div>
    );
};

export default Register;