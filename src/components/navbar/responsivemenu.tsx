import { IoSearchSharp } from "react-icons/io5";
import Home from "../../assets/home.png";
import Experience from "../../assets/experience.png";
import Services from "../../assets/services.png";
import { useEffect, useState } from "react";

type MenusType = {
    icon: string,
    title: string,
    link: string,
    notification: string | null
}

const menus:MenusType[] = [
    {
        icon:Home,
        title:"homes",
        link:"#",
        notification:null
    },
    {
        icon:Experience,
        title:"experiences",
        link:"#",
        notification:"new"
    },
    {
        icon:Services,
        title:"services",
        link:"#",
        notification:"new"
    }
];

export default function ResponsiveMenu(){
    const [navConfig,setNavConfig] = useState<boolean>(false);

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY > 5){
                setNavConfig(true)
            }else{
                setNavConfig(false)
            }
        }

        window.addEventListener("scroll",handleScroll)

        return ()=>{window.removeEventListener("scroll",handleScroll)}
    },[])

    return(
        <>
        <div className="xl:hidden md:hidden py-2.5">
            <div className="flex flex-row items-center justify-center w-full h-[56px] rounded-full shadow-md shadow-black/20">
                <span>
                    <IoSearchSharp />
                </span>
                
                <span>
                    Start your search
                </span>
            </div>

            <div className="flex flex-row mt-5">
                {
                    menus.map((items,index)=>{
                        return <a href={items.link} className="figtree capitalize text-sm font-semibold text-black/50 flex flex-col justify-center items-center relative transition-all duration-150 ease-linear hover:text-black group" key={index}>

                            <span className={`transiiton-all duration-150 ease-linear ${navConfig?"-translate-y-1/2 h-0 overflow-hidden":""}`}>
                            <img src={items.icon} alt="linkIcon" className="w-[90%] transition-all duration-150 ease-linear group-hover:scale-110"/>
                            </span>

                            <span>
                                {items.title}
                            </span>

                            {
                                items.notification?
                                <span className={`absolute top-0 -right-2.5 bg-[#597496] text-white font-bold text-xs px-1.5 py-0.5 uppercase rounded-full rounded-bl-xl ${navConfig?"hidden":""}`}>
                                {items.notification}
                                </span>:
                            null
                            }
                            
                        </a>
                    })
                }
            </div>
        </div>
        </>
    )
}