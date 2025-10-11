import { FaSearch } from "react-icons/fa";

type PropsType = {
    navConfig: boolean
}

export default function Filtering({navConfig}:PropsType){
    return(
        <>
        <div className={`xl:grid md:grid hidden grid-cols-12 items-center transition-all duration-150 ease-linear mx-auto bg-white border border-[#EBEBEB] rounded-full [&>div]:py-2.5 ${navConfig?"w-[40%] translate-y-[-70%] opacity-0 h-0 overflow-hidden pointer-events-none":"xl:w-[70%] md:w-full mt-6"}`}>
            
            <div className="col-span-4 pl-8 rounded-full transition-all duration-75 ease-linear hover:bg-[#EBEBEB] h-full flex flex-col justify-center">
                <div>
                    <h4 className="figtree font-medium text-xs text-[#222222] capitalize">
                        where
                    </h4>
                </div>

                <div>
                    <p className="figtree font-medium text-sm text-[#222222]/50">
                        Search destination
                    </p>
                </div>
            </div>

            <div className="col-span-2 px-6 rounded-full transition-all duration-75 ease-linear hover:bg-[#EBEBEB] h-full flex flex-col justify-center">
                <h4 className="figtree font-medium text-xs text-[#222222] capitalize">
                    check in
                </h4>

                <p className="figtree font-medium text-sm text-[#222222]/50">
                    Add dates
                </p>
            </div>

            <div className="col-span-2 px-6 rounded-full transition-all duration-75 ease-linear hover:bg-[#EBEBEB] h-full flex flex-col justify-center">
                <h4 className="figtree font-medium text-xs text-[#222222] capitalize">
                    check out
                </h4>

                <p className="figtree font-medium text-sm text-[#222222]/50">
                    Add dates
                </p>
            </div>

            <div className="col-span-4 px-6 flex flex-row items-center justify-between rounded-full transition-all duration-75 ease-linear hover:bg-[#EBEBEB]">
                <div>
                    <div>
                        <h4 className="figtree font-medium text-xs text-[#222222] capitalize">
                            who
                        </h4>
                    </div>

                    <div>
                        <p className="figtree font-medium text-sm text-[#222222]/50">
                            Add guest
                        </p>
                    </div>
                </div>

                <div>
                    <button className="h-12 w-12 rounded-full bg-[#FF5170] flex justify-center items-center text-white">
                        <FaSearch />
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}