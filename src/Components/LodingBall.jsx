import { FaBasketball, } from "react-icons/fa6";

const LodingBall = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
        <h1 className=" flex gap-x-2 text-6xl font-bold animate-bounce text-[#e3773e]"> Analog <span className="animate-spin"><FaBasketball /></span> Crafter</h1>
    </div>
    );
};

export default LodingBall;