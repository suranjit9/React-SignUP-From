import { Outlet } from "react-router-dom";
import Header from "../Leout/Header/Header";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="w-[80%] mx-auto">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;