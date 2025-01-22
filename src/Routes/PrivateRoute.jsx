import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LodingBall from "../Components/LodingBall";


const PrivateRoute = ({children}) => {
    const {user , loading}  = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <LodingBall></LodingBall>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;