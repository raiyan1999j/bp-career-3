import Filtering from "./filtering";
import Menu from "./menu";

export default function Navbar(){
    return(
        <>
        <nav className="w-full px-8 pt-[22px] pb-10 bg-[#FBFBFB]">
            <Menu/>
            <Filtering/>
        </nav>
        </>
    )
}