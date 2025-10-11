import { useEffect, useState } from "react";
import Filtering from "./filtering";
import Menu from "./menu";

export default function Navbar(){
    const [navConfig,setNavConfig] = useState<boolean>(false);

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY > 5){
                setNavConfig(true)

                document.documentElement.style.setProperty('--nav-height','120px');

                console.log(window.scrollY)
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
        <nav className={`w-full px-8 ${navConfig?"py-2.5 fixed top-0 z-50":"pt-[22px] pb-10"} bg-[#FBFBFB] border-b border-b-black/5`}>
            <Menu navConfig={navConfig}/>
            <Filtering navConfig={navConfig}/>
        </nav>
        </>
    )
}