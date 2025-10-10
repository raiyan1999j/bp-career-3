import Pagelogo from "../../assets/pagelogo.png";
import Home from "../../assets/home.png";
import Experience from "../../assets/experience.png";
import Services from "../../assets/services.png";
import { CiGlobe } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import HostModal from "./hostmodal";
import { useEffect, useRef, useState } from "react";
import GlobeModal from "./globemodal";
import MenuModal from "./menumodal";

type MenusType = {
    icon: string,
    title: string,
    link: string,
    notification: string | null
}

export type MenuConfigType = {
    hostMenu: boolean,
    globeMenu: boolean,
    menu: boolean
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

export default function Menu(){
    const closeDetection = useRef<HTMLDivElement|null>(null);

    const [menuConfig,setMenuConfig] = useState<MenuConfigType>({
        hostMenu:false,
        globeMenu: false,
        menu: false
    })

    useEffect(()=>{
        function handleClose(event: MouseEvent){
            if(closeDetection.current && !closeDetection.current.contains(event.target as Node)){
                setMenuConfig(prev=>({...prev,menu:false}))
            }
        }

        if(menuConfig.menu) document.addEventListener("mousedown",handleClose);

        return ()=>document.removeEventListener("mousedown",handleClose)
    },[menuConfig.menu,setMenuConfig])
    return(
        <>
        <div className="grid grid-cols-8 items-center">
            <div className="col-span-2">
                <a href="#">
                    <img src={Pagelogo} alt="pageLogo" className="w-[102px]"/>
                </a>
            </div>

            <div className="col-span-4 flex flex-row justify-center">
                {
                    menus.map((items,index)=>{
                        return <a href={items.link} className="figtree capitalize text-sm font-semibold text-black/50 flex flex-row justify-center items-center relative transition-all duration-150 ease-linear hover:text-black group" key={index}>
                            <img src={items.icon} alt="linkIcon" className="w-[35%] transition-all duration-150 ease-linear group-hover:scale-110"/>

                            <span>
                                {items.title}
                            </span>

                            {
                                items.notification?
                                <span className="absolute top-0 bg-[#597496] text-white font-bold text-xs px-1.5 py-0.5 uppercase rounded-full rounded-bl-xl">
                                {items.notification}
                                </span>:
                            null
                            }
                            
                        </a>
                    })
                }
            </div>

            <div className="col-span-2 flex flex-row justify-end items-center gap-x-3">
                <div>
                    <button className="figtree font-medium text-sm leading-[18px] px-2.5 py-2.5 rounded-full transition-all duration-100 ease-linear hover:bg-[#EBEBEB]/50 hover:cursor-pointer" onClick={()=>{setMenuConfig(prev=>({...prev,hostMenu:true}))}}>
                    Become a host
                    </button>

                    <HostModal hostModal={menuConfig.hostMenu} setMenuConfig={setMenuConfig}/>
                </div>
                
                <div>
                    <button className="bg-[#EBEBEB] text-black h-10 w-10 flex justify-center items-center rounded-full transition-all duration-100 ease-in hover:bg-[#d3d2d2]/80 hover:cursor-pointer" onClick={()=>{setMenuConfig(prev=>({...prev,globeMenu:true}))}}>
                    <CiGlobe />
                    </button>

                    <GlobeModal globeModal={menuConfig.globeMenu} setMenuConfig={setMenuConfig}/>
                </div>
                
                <div className="relative" ref={closeDetection}>
                    <button className="bg-[#EBEBEB] text-black h-10 w-10 flex justify-center items-center rounded-full transition-all duration-100 ease-in hover:bg-[#d3d2d2]/80 hover:cursor-pointer" onClick={(event)=>{
                        event.stopPropagation();
                        setMenuConfig(prev=>({...prev,menu:!prev.menu}))}}>
                    <IoMenu />
                    </button>

                    <MenuModal menuModal={menuConfig.menu} setMenuConfig={setMenuConfig}/>
                </div>

            </div>
        </div>
        </>
    )
}