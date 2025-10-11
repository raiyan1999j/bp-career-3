import { useEffect, useState } from "react";
import Filtering from "./filtering";
import Menu from "./menu";
import ResponsiveMenu from "./responsivemenu";
import ResponsiveFilter from "./responsivefilter";

export default function Navbar(){
    const [navConfig,setNavConfig] = useState<boolean>(false);

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY > 5){
                setNavConfig(true)

                document.documentElement.style.setProperty('--nav-height','120px');
            }else{
                setNavConfig(false);

                document.documentElement.style.removeProperty('--nav-height');
            }
        }


        window.addEventListener("scroll",handleScroll);

        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])
    return(
        <>
        <nav className={`w-full px-8 ${navConfig?"xl:py-2.5 py-0 fixed top-0 z-50":"xl:pt-[22px] pt-2.5 xl:pb-10 pb-2.5"} bg-[#FBFBFB] border-b border-b-black/5`}>
            <Menu navConfig={navConfig}/>
            <Filtering navConfig={navConfig}/>
            <ResponsiveMenu/>
        </nav>

        <ResponsiveFilter/>
        </>
    )
}