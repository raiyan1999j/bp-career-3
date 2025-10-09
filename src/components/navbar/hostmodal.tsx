import { RxCross2 } from "react-icons/rx";
import HostHome from "../../assets/hostHome.png";
import HostExp from "../../assets/hostExp.avif";
import HostService from "../../assets/hostService.avif";
import { useEffect, useRef } from "react";
import type { MenuConfigType } from "./menu";

type HostTypes = {
    img:string,
    title:string
}

type PropsType = {
    hostModal: boolean,
    setMenuConfig: React.Dispatch<React.SetStateAction<MenuConfigType>>
}

const host:HostTypes[] = [
    {
        img:HostHome,
        title:"home"
    },
    {
        img:HostExp,
        title:"experience"
    },
    {
        img:HostService,
        title:"service"
    }
]

export default function HostModal({hostModal,setMenuConfig}:PropsType){
    const closeDetection = useRef<HTMLDivElement|null>(null);

    useEffect(()=>{
        function handleClose(event: MouseEvent){
            if(closeDetection.current && !closeDetection.current.contains(event.target as Node)){
                setMenuConfig(prev=>({...prev,hostMenu:false}))
            }
        }

        if(hostModal) document.addEventListener("mousedown",handleClose);

        return ()=>document.removeEventListener("mousedown",handleClose)
    },[hostModal,setMenuConfig])
    return(
        <>
        <section className={`h-full w-screen bg-black/20 fixed top-0 left-0 py-[5%] px-[15%] z-50 ${hostModal?"opacity-100":"opacity-0 pointer-events-none"}`} >
            <div className={`w-full bg-white rounded-xl py-6 px-6 transition-all duration-150 ease-linear ${hostModal?"translate-y-0 opacity-100":"translate-y-1/2 opacity-50"}`} ref={closeDetection}>
                <div>
                    <button className="h-6 w-6 flex justify-center items-center rounded-full transition-all duration-75 ease-linear hover:bg-[#DDDDDD]" onClick={()=>{setMenuConfig(prev=>({...prev,hostMenu:false}))}}>
                        <RxCross2 />
                    </button>
                </div>
                
                <div className="text-center mt-[41px]">
                    <h2 className="figtree font-semibold text-[26px] text-[#222222]">
                        What would you like to host?
                    </h2>
                </div>

                <div className="grid grid-cols-3 gap-x-4 px-6 mt-[73px] mb-[57px]">
                    {
                        host.map((items,index)=>{
                            return <div className="px-6 pt-[100px] pb-12 rounded-xl border border-[#DDDDDD]" key={index}>
                                <div className="flex flex-col items-center">
                                    <div className="relative h-[110px] w-[110px]">
                                        <img src={items.img} alt="serviceImg" className="absolute h-full w-full" />
                                    </div>

                                    <div>
                                        <h4>
                                            {items.title}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
        </>
    )
}