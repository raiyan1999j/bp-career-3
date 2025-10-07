import { MdKeyboardArrowDown } from "react-icons/md";

type TabTopicsType = {
    title:string | null,
    info:string | null,
    icon?: React.ReactNode,
    link?: string | null
    }

const tabMenu: string [] = ["Travel tips & inspiration","Airbnb-friendly apartments"];

const tabTopics:TabTopicsType[][] = [
    [
        {
            title:"family travel hub",
            info:"tips and inspiration"
        },
        {
            title:"family budget travel",
            info:"get there for less"
        },
        {
            title:"vacation ideas for any budget",
            info:"make it speacial without making it"
        },
        {
            title:"travel europe on a budget",
            info:"how to take kids to europe"
        },
        {
            title:"outdoor adventure",
            info:"explore nature with family"
        },
        {
            title:"bucket list national parks",
            info:"must see parks for family travel"
        },
        {
            title:"kid-friendly state parks",
            info:"check out these family friendly"
        }
    ],
    [
        {
            title:"albuquerque",
            info:"new maxico"
        },
        {
            title:"arlington,tx",
            info:"texas"
        },
        {
            title:"atlanta metro",
            info:"georgia"
        },
        {
            title:"augusta",
            info:"georgia"
        },
        {
            title:"austin metro",
            info:"texas"
        },
        {
            title:"baton rouge",
            info:"louisiana"
        },
        {
            title:"bentonville",
            info:"arkansas"
        },
        {
            title:"birmingham",
            info:"alabma"
        },
        {
            title:"boise",
            info:"idaho"
        },
        {
            title:"boston metro",
            info:"massachusetts"
        },
        {
            title:"boulder",
            info:"colorado"
        },
        {
            title:"charlotte",
            info:"north caroline"
        },
        {
            title:"chicago metro",
            info:"lllionois"
        },
        {
            title:"cincinnati",
            info:"ohio"
        },
        {
            title:"columbus",
            info:"ohio"
        },
        {
            title:"cristview",
            info:"florida"
        },
        {
            title:"dallas",
            info:"texas"
        },
        {
            title:"show more",
            info:null,
            icon:<MdKeyboardArrowDown />,
            link:"#"
        }
    ]
]
export default function Tabs(){
    return(
        <>
        <section className="py-12 px-8 bg-[#F7F7F7] mt-[49px]">
            <div className="w-full">
                <h2 className="figtree font-medium text-[#222222] text-[22px]">
                    Inspiration for future getways
                </h2>
            </div>

            <div className="flex flex-row gap-x-3 w-full border-b border-b-[#DDDDDD] py-[6px] mt-[14px]">
                {
                    tabMenu.map((items,index)=>{
                        return <button className="figtree font-medium text-sm relative after:content-'' after:table after:absolute after:-bottom-1.5 after:h-[1px] after:w-full after:bg-black" key={index}>
                            {items}
                        </button>
                    })
                }
            </div>

            <div className="grid grid-cols-6 gap-x-2 gap-y-4 mt-8">
                {
                    tabTopics[0].map((items,index)=>{
                        return <div key={index}>
                            <a href="#" className="flex flex-col">
                                <span className="figtree font-medium text-sm text-[#222222]">
                                    {items.title}
                                </span>
                                <span className="figtree font-normal text-sm text-[#222222]/50 truncate">
                                    {items.info}
                                </span>
                            </a>
                        </div>
                    })
                }
            </div>
        </section>
        </>
    )
}