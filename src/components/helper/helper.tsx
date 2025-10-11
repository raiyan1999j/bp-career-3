import type { Dispatch, RefObject, SetStateAction } from "react";
import { IoMdStar } from "react-icons/io";

type CarouselType = {
    lastId: number,
    nextSlideOff: boolean,
    prevSlideOff: boolean
}

type ServicesType = {
    image: string | null,
    title: string | null,
    icon: React.ReactNode,
    heading: string | null,
    info: string | null,
    rating: number
}

type CommonUiProps = {
    services:ServicesType[],
    itemsRef:RefObject<{[key:string]:HTMLDivElement|null}>
}

export function carouselHandler(
    action:string,
    itemsRef:RefObject<{[key:string]:HTMLDivElement|null}>,
    carouselConfig: CarouselType,
    setCarouselConfig: Dispatch<SetStateAction<CarouselType>>,
    arrayLength : number
){
        let newId = carouselConfig.lastId;

        if(action == "next"){
            newId = newId === 1 ? 6 + 6 : newId + 6;

            if(newId > arrayLength){
                const difference = newId - arrayLength;
                newId = newId - difference;

                itemsRef.current[`items${newId}`]?.scrollIntoView({
                    behavior:"smooth",
                    inline:"start",
                    block:"nearest"
                });

                setCarouselConfig(prev=>({...prev,lastId:newId,nextSlideOff:true,prevSlideOff:false}))
            }else{
                itemsRef.current[`items${newId}`]?.scrollIntoView({
                    behavior:"smooth",
                    inline:"start",
                    block:"nearest"
                });

                setCarouselConfig(prev=>({...prev,lastId:newId,nextSlideOff:false,prevSlideOff:false}))
            }
        }else{
            newId -= 6;
            
            if(newId < 6){
                newId = 1;

                itemsRef.current[`items${newId}`]?.scrollIntoView({
                    behavior:"smooth",
                    inline:"start",
                    block:"nearest"
                });

                setCarouselConfig(prev=>({...prev,lastId:newId,nextSlideOff:false,prevSlideOff:true}))
            }else{
                itemsRef.current[`items${newId}`]?.scrollIntoView({
                    behavior:"smooth",
                    inline:"start",
                    block:"nearest"
                });

                setCarouselConfig(prev=>({...prev,lastId:newId,nextSlideOff:false,prevSlideOff:false}))
            }
        }
    }

export function CommonUi({services,itemsRef}:CommonUiProps){
    return <div className="flex flex-row flex-nowrap gap-x-[11px] w-full scroll-smooth overflow-x-scroll customScrollbar">
                    {
                        services.map((items,index)=>{
                            return <div className="xl:w-[calc(16.67%_-_11px)] md:w-[calc(50%_-_11px)] lg:w-[calc(33.33%_-_11px)] w-full shrink-0 rounded-xl overflow-hidden" key={index} id={`items${index + 1}`} ref={(elem)=>{itemsRef.current[`items${index+1}`] = elem}}>
                                <div className="h-[196px] w-full relative">
                                    <img src={items.image ?? ""} alt="servicesImg" className="absolute h-full w-full rounded-xl"/>

                                    <div className="flex flex-row w-full justify-between absolute top-2 px-2">
                                        <span className="figtree font-semibold text-sm text-black bg-white rounded-full px-1.5">
                                            {items.title}
                                        </span>

                                        <span className="text-lg text-black/50">
                                            {items.icon}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-2.5">
                                    <h4 className="figtree font-semibold text-sm text-[#222222]">
                                        {items.heading}
                                    </h4>

                                    <div className="flex flex-row gap-x-2 items-center mt-1.5">
                                        <span className="figtree font-normal text-xs text-[#6A6A6A]">
                                            {items.info}
                                        </span>

                                        <span className="figtree font-normal text-xs text-[#6A6A6A] flex flex-row items-center">
                                            <IoMdStar />
                                            {items.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
}