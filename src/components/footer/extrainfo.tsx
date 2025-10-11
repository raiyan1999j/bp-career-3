import { MdOutlineCopyright } from "react-icons/md";
import Checkin from "../../assets/checkin.png";
import { CiGlobe } from "react-icons/ci";
import { TbCurrencyDollar } from "react-icons/tb";
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

type InfoType = {
    title:string | React.ReactNode,
    link?:string,
    icon?:React.ReactNode
}

type SocialType = {
    title?:string,
    icon:React.ReactNode,
    link?:string
}

const social:SocialType[] = [
    {
        title:"English(US)",
        icon:<CiGlobe />,
        link:"#"
    },
    {
        title:"USD",
        icon:<TbCurrencyDollar />,
        link:"#"
    },
    {
        icon:<TiSocialFacebook />,
        link:"https://www.facebook.com/"
    },
    {
        icon:<RiTwitterXFill />,
        link:"https://www.twitter.com"
    },
    {
        icon:<FaInstagram />,
        link:"https://www.instagram.com"
    }
]

const info:InfoType[] = [
    {
        title:(<>
        <MdOutlineCopyright /> 2025 Airbnb,Inc
        </>),
    },
    {
        title:"terms",
        link:"#"
    },
    {
        title:"sitemap",
        link:"#"
    },
    {
        title:"privacy",
        link:"#"
    },
    {
        title:"your privacy choices",
        icon: Checkin
    }
]

export default function ExtraInfo(){
    return(
        <>
        <section className="px-8 bg-[#F7F7F7]">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 md:justify-center md:items-center grid-cols-1 gap-y-5 border-t border-t-[#6A6A6A]/10 py-6">
                <div className="flex xl:flex-row flex-wrap md:justify-center items-center gap-x-4">
                    {
                        info.map((items,index)=>{
                            if(items.link){
                                return <a href={items.link} className="figtree font-normal text-sm capitalize text-black/80 relative after:absolute after:h-[2px] after:w-[2px] after:bg-black after:rounded-full after:top-[50%] after:-right-2 transiton-all duration-75 ease-linear hover:border-b hover:border-b-black" key={index}>
                                    {items.title}
                                </a>
                            }else if(items.icon){
                                return <a href={items.link} className=" flex flex-row gap-x-4 items-center" key={index}>
                                    <span className="figtree font-normal text-sm capitalize text-black/80">
                                        {items.title}
                                    </span>

                                    <span>
                                        <img src={(items.icon).toString()} alt="icon" className="object-cover" />
                                    </span>
                                    
                                </a>
                            }else{
                                return <span key={index} className="figtree font-normal text-sm capitalize text-black/80 flex flex-row items-center relative after:absolute after:h-[2px] after:w-[2px] after:bg-black after:rounded-full after:top-[50%] after:-right-2">{items.title}</span>
                            }
                        })
                    }
                </div>

                <div className="flex flex-row xl:justify-end md:justify-center items-center gap-x-4">
                    {
                        social.map((items,index)=>{
                            if(items.title){
                                return <span className="flex flex-row items-center gap-x-2" key={index}>
                                    {items.icon}

                                    {items.title}
                                </span>
                            }else{
                                return <a href={items.link} className="h-6 w-6 flex justify-center items-center text-[#222222] transition-all duration-100 ease-linear hover:bg-[#6A6A6A]/10 rounded-full" key={index}>
                                    {items.icon}
                                </a>
                            }
                        })
                    }
                </div>
            </div>
        </section>
        </>
    )
}