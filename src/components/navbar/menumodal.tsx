import { GoQuestion } from "react-icons/go";
import Host from "../../assets/host.webp";
import type { MenuConfigType } from "./menu";

type PropsType = {
    menuModal: boolean,
    setMenuConfig:React.Dispatch<React.SetStateAction<MenuConfigType>>
}

type MenuType = {
    icon?:React.ReactNode,
    title?:string,
    heading?:string,
    context?:string,
    img?:string,
    link?:string,
    group?:{title:string,link:string}[]
}

const menu:MenuType[] = [
    {
        icon:<GoQuestion />,
        title:"Help Center",
        link:"#"
    },
    {
        heading:"Become a Host",
        context:"It's easy to start hosting and earn extra income.",
        img:Host
    },
    {
        group:[
    {
        title:"Refer a Host",
        link:"#"
    },
    {
        title:"Find a co-host",
        link:"#"
    },
    {
        title:"Gift cards",
        link:"#"
    }
        ]
    },
    {
        title:"Login or Signup",
        link:"#"
    }
]

export default function MenuModal({menuModal,setMenuConfig}:PropsType){
    
    return(
        <>
        <div className={`flex flex-col w-[265px] bg-white rounded-xl absolute right-[10%] top-[130%] z-40 shadow-lg shadow-black py-5 ${menuModal?"":"hidden pointer-events-none"}`} onClick={(event)=>{event.stopPropagation}}>
            {
                menu.map((items,index)=>{
                    if(items.icon && items.title && items.link){
                        return <span className="py-2.5 relative after:absolute after:h-[1px] after:w-[90%] after:bg-black/10 after:bottom-0 after:left-2.5" key={index}>
                            <a className="flex flex-row items-center gap-x-2.5 px-2.5 py-1.5 hover:bg-black/5" href={items.link} key={index}>
                            <span className="text-lg">
                                {items.icon}
                            </span>

                            <span className="figtree font-normal">
                                {items.title}
                            </span>
                        </a>
                        </span>
                    }

                    if(items.heading){
                        return <span className="py-2.5 relative after:absolute after:h-[1px] after:w-[90%] after:bg-black/10 after:bottom-0 after:left-2.5" key={index}>
                            <button className="flex flex-row px-2.5 py-1.5 hover:bg-black/5 hover:cursor-pointer" key={index} onClick={()=>{setMenuConfig(prev=>({...prev,hostMenu:true,menu:false}))}}>
                            <span className="flex flex-col">
                                <span className="figtree font-normal text-base text-left">
                                    {items.heading}
                                </span>
                                <span className="figtree text-black/50 text-xs text-left">
                                    {items.context}
                                </span>
                            </span>

                            <span className="relative w-20">
                                <img src={items.img} alt="hostImg" className="absolute h-full w-full"/>
                            </span>
                        </button>
                        </span>
                    }

                    if(items.group){
                        return <span className="py-2.5 relative after:absolute after:h-[1px] after:w-[90%] after:bg-black/10 after:bottom-0 after:left-2.5" key={index}>
                            <span className="flex flex-col">
                            {
                                items.group.map((subItems,subIndex)=>{
                                    return <a className="figtree font-thin text-black px-2.5 py-1.5 hover:bg-black/5" href={subItems.link} key={subIndex}>
                                        {subItems.title}
                                    </a>
                                })
                            }
                        </span>
                        </span>
                    }

                    if(items.title && items.link){
                        return <span className="pt-2.5 flex flex-col" key={index}>
                            <a className="figtree font-thin text-black px-2.5 py-1.5 hover:bg-black/5" href={items.link} key={index}>
                            {items.title}
                        </a>
                        </span>
                    }
                })
            }
        </div>
        </>
    )
}