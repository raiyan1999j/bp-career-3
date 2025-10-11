import { FaRegHeart, FaRegUserCircle } from "react-icons/fa"
import { IoSearchSharp } from "react-icons/io5"


type FiltermenuType = {
    icon:React.ReactNode,
    title:string,
    link:string
}

const filterMenu:FiltermenuType[] = [
    {
        icon:<IoSearchSharp />,
        link:"#",
        title:"Explore"
    },
    {
        icon:<FaRegHeart />,
        link:"#",
        title:"Wishlist"
    },
    {
        icon:<FaRegUserCircle />,
        link:"#",
        title:"Log in"
    }
]

export default function ResponsiveFilter(){
    return(
        <>
        <section className="fixed bottom-0 left-0 w-full px-8 py-2.5 border-t border-t-black/10">
            <div className="flex flex-row gap-x-10 justify-center w-full">
                {
                    filterMenu.map((items,index)=>{
                        return <a className="flex flex-col items-center transition-all duration-150 ease-linear hover:text-[#E41D54] active:text-[#E41D54]" href={items.link} key={index}>
                            <span className="text-3xl text-black/50">
                                {items.icon}
                            </span>
                            <span className="figtree text-sm text-black/50 font-thin">
                                {items.title}
                            </span>
                        </a>
                    })
                }
            </div>
        </section>
        </>
    )
}