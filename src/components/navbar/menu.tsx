import Pagelogo from "../../assets/pagelogo.png";
import Home from "../../assets/home.png";
import Experience from "../../assets/experience.png";
import Services from "../../assets/services.png";
import { CiGlobe } from "react-icons/ci";
import { IoMenu, IoMenuSharp } from "react-icons/io5";

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

export default function Menu(){
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

            <div className="col-span-2 flex flex-row justify-end gap-x-3">
                <button className="figtree font-medium text-sm leading-[18px] px-2.5 rounded-full transition-all duration-100 ease-linear hover:bg-[#EBEBEB]/50 hover:cursor-pointer">
                    Become a host
                </button>

                <button className="bg-[#EBEBEB] text-black h-10 w-10 flex justify-center items-center rounded-full">
                    <CiGlobe />
                </button>

                <button className="bg-[#EBEBEB] text-black h-10 w-10 flex justify-center items-center rounded-full">
                    <IoMenu />
                </button>
            </div>
        </div>
        </>
    )
}