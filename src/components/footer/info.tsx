type ContainerType = {
    title:string,
    link:string
}

type InfoType = {
    title:string,
    container: ContainerType[]
}

const info:InfoType[] = [
    {
        title:"support",
        container:[
            {
                title:"help center",
                link:"#"
            },
            {
                title:"get help with a safty issue",
                link:"#"
            },
            {
                title:"AirCover",
                link:"#"
            },
            {
                title:"anti-discrimination",
                link:"#"
            },
            {
                title:"disability support",
                link:"#"
            },
            {
                title:"cancellation option",
                link:"#"
            },
            {
                title:"report neighborhood concern",
                link:"#"
            }
        ]
    },
    {
        title:"hosting",
        container:[
            {
                title:"airbnb your home",
                link:"#"
            },
            {
                title:"airbnb your experience",
                link:"#"
            },
            {
                title:"airbnb your service",
                link:"#"
            },
            {
                title:"airCover for hosts",
                link:"#"
            },
            {
                title:"hosting resources",
                link:"#"
            },
            {
                title:"community forum",
                link:"#"
            },
            {
                title:"hosting responsibility",
                link:"#"
            },
            {
                title:"airbnb-friendly apartments",
                link:"#"
            },
            {
                title:"join a free hosting class",
                link:"#"
            },
            {
                title:"find a co-host",
                link:"#"
            }
        ]
    },
    {
        title:"Airbnb",
        container:[
            {
                title:"2025 summer release",
                link:"#"
            },
            {
                title:"newsroom",
                link:"#"
            },
            {
                title:"career",
                link:"#"
            },
            {
                title:"investors",
                link:"#"
            },
            {
                title:"gift cards",
                link:"#"
            },
            {
                title:"airbnb.org emergency stays",
                link:"#"
            }
        ]
    }
]

export default function Info(){
    return(
        <>
        <section className="px-8 pt-20 pb-8 bg-[#F7F7F7]">
            <div className="grid grid-cols-3 gap-x-4">
                {
                    info.map((items,index)=>{
                        return <div key={index}>
                            <h3 className="figtree font-medium text-lg capitalize text-[#222222]">
                                {items.title}
                            </h3>

                            <ul className="flex flex-col gap-y-[18px] mt-[17px]">
                                {
                                    items.container.map((subItems,subIndex)=>{
                                        return <li key={subIndex}>
                                            <a href={subItems.link} className="figtree font-normal text-sm text-[#6A6A6A] capitalize transition-all duration-75 ease-linear hover:text-black hover:border-b hover:border-b-black">{subItems.title}</a>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    })
                }
            </div>
        </section>
        </>
    )
}