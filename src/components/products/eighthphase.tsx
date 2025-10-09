import { useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import { carouselHandler, CommonUi } from "../helper/helper";


type ServicesType = {
    image: string | null,
    title: string | null,
    icon: React.ReactNode,
    heading: string | null,
    info: string | null,
    rating: number
}

type CarouselType = {
    lastId:number,
    nextSlideOff: boolean,
    prevSlideOff: boolean
}

const services:ServicesType[] = [
    {
        image:"https://a0.muscache.com/im/pictures/581f9034-7104-4581-aea2-dce8298c17eb.jpg?im_w=320",
        title:"Guest favorite",
        icon:<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  width="20"
  height="20"
  fill="rgba(0, 0, 0, 0.5)"
  stroke="white"
  strokeWidth="20"
>
  <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.7L256 96l-19.9-19.6C185.7 24.4 104.2 16.3 49.7 62.7c-62 52.8-66.1 149.8-9.9 207.5l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.2-57.7 52.1-154.7-9.8-207.5z"/>
</svg>
,
        heading:"Apartment in Bukit Bintang",
        rating:4.92,
        info:"$86 for 2 night"
    },
    {
        image:"https://a0.muscache.com/im/pictures/3b66f142-4b4d-4cd0-b8af-61d49159bafe.jpg?im_w=320",
        title:"Guest favorite",
        icon:<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  width="20"
  height="20"
  fill="rgba(0, 0, 0, 0.5)"
  stroke="white"
  strokeWidth="20"
>
  <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.7L256 96l-19.9-19.6C185.7 24.4 104.2 16.3 49.7 62.7c-62 52.8-66.1 149.8-9.9 207.5l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.2-57.7 52.1-154.7-9.8-207.5z"/>
</svg>
,
        heading:"Place to stay in Cheras",
        rating:4.94,
        info:"$44 for 2 night"
    },
    {
        image:"https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTQ2MjMxMzI5NDU5MTUwMjA5/original/ea53b167-3c24-4de5-86a7-8da420145f87.jpeg?im_w=320",
        title:"Guest favorite",
        icon:<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  width="20"
  height="20"
  fill="rgba(0, 0, 0, 0.5)"
  stroke="white"
  strokeWidth="20"
>
  <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.7L256 96l-19.9-19.6C185.7 24.4 104.2 16.3 49.7 62.7c-62 52.8-66.1 149.8-9.9 207.5l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.2-57.7 52.1-154.7-9.8-207.5z"/>
</svg>
,
        heading:"Place to stay in Bukit Bintang",
        rating:4.92,
        info:"$30 for 2 night"
    },
    {
        image:"https://a0.muscache.com/im/pictures/hosting/Hosting-26673656/original/ffe1a858-1850-457d-904a-ca1a4b37cd00.jpeg?im_w=320",
        title:"Guest favorite",
        icon:<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  width="20"
  height="20"
  fill="rgba(0, 0, 0, 0.5)"
  stroke="white"
  strokeWidth="20"
>
  <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.7L256 96l-19.9-19.6C185.7 24.4 104.2 16.3 49.7 62.7c-62 52.8-66.1 149.8-9.9 207.5l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.2-57.7 52.1-154.7-9.8-207.5z"/>
</svg>
,
        heading:"Condo in PULAPOL",
        rating:4.92,
        info:"$77 for 2 night"
    },
    {
        image:"https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQwMzM3NjAzOTgxMjUzOTQ3Nw==/original/bcb4d4a0-dc99-41f2-89b3-7f9a1872571f.jpeg?im_w=320",
        title:"Guest favorite",
        icon:<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  width="20"
  height="20"
  fill="rgba(0, 0, 0, 0.5)"
  stroke="white"
  strokeWidth="20"
>
  <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.7L256 96l-19.9-19.6C185.7 24.4 104.2 16.3 49.7 62.7c-62 52.8-66.1 149.8-9.9 207.5l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.2-57.7 52.1-154.7-9.8-207.5z"/>
</svg>
,
        heading:"Apartment in Bukit Bintang",
        rating:4.92,
        info:"$86 for 2 night"
    },
    {
        image:"https://a0.muscache.com/im/pictures/miso/Hosting-635481064627920753/original/095e8899-2207-45c9-b1c2-74fd75fa50a0.jpeg?im_w=320",
        title:"Guest favorite",
        icon:<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  width="20"
  height="20"
  fill="rgba(0, 0, 0, 0.5)"
  stroke="white"
  strokeWidth="20"
>
  <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.7L256 96l-19.9-19.6C185.7 24.4 104.2 16.3 49.7 62.7c-62 52.8-66.1 149.8-9.9 207.5l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.2-57.7 52.1-154.7-9.8-207.5z"/>
</svg>
,
        heading:"Condo in Bukit Bintang",
        rating:4.92,
        info:"$86 for 2 night"
    },
    {
        image:"https://a0.muscache.com/im/pictures/miso/Hosting-1050640214490822608/original/2536b828-a28f-40d5-968d-409fb8159967.jpeg?im_w=320",
        title:"Guest favorite",
        icon:<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  width="20"
  height="20"
  fill="rgba(0, 0, 0, 0.5)"
  stroke="white"
  strokeWidth="20"
>
  <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.7L256 96l-19.9-19.6C185.7 24.4 104.2 16.3 49.7 62.7c-62 52.8-66.1 149.8-9.9 207.5l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.2-57.7 52.1-154.7-9.8-207.5z"/>
</svg>
,
        heading:"Apartment in Bukit Bintang",
        rating:4.92,
        info:"$86 for 2 night"
    },
    {
        image:"https://a0.muscache.com/im/pictures/miso/Hosting-821288384110508132/original/b9650192-5fba-4b03-870e-34abb761703d.jpeg?im_w=320",
        title:"Guest favorite",
        icon:<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  width="20"
  height="20"
  fill="rgba(0, 0, 0, 0.5)"
  stroke="white"
  strokeWidth="20"
>
  <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.7L256 96l-19.9-19.6C185.7 24.4 104.2 16.3 49.7 62.7c-62 52.8-66.1 149.8-9.9 207.5l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.2-57.7 52.1-154.7-9.8-207.5z"/>
</svg>
,
        heading:"Place to stay in Bukit Bintang",
        rating:4.92,
        info:"$86 for 2 night"
    },
    {
        image:"https://a0.muscache.com/im/pictures/hosting/Hosting-1031813899662473330/original/ee5f775d-c575-4a88-bbd3-a37e308c3843.jpeg?im_w=320",
        title:"Guest favorite",
        icon:<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  width="20"
  height="20"
  fill="rgba(0, 0, 0, 0.5)"
  stroke="white"
  strokeWidth="20"
>
  <path d="M462.3 62.7c-54.5-46.4-136-38.3-186.4 13.7L256 96l-19.9-19.6C185.7 24.4 104.2 16.3 49.7 62.7c-62 52.8-66.1 149.8-9.9 207.5l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.2-57.7 52.1-154.7-9.8-207.5z"/>
</svg>
,
        heading:"Condo in Bukit Bintang",
        rating:4.92,
        info:"$86 for 2 night"
    }
]

export default function EightPhase(){
    const itemsRef = useRef<{[key:string]:HTMLDivElement|null}>({});
    const [carouselConfig,setCarouselConfig] = useState<CarouselType>({
        nextSlideOff:false,
        prevSlideOff:true,
        lastId:6
    })

    const carousel=(action:string)=>{
        carouselHandler(action,itemsRef,carouselConfig,setCarouselConfig,services.length)
    }

    return(
        <>
        <section className="px-8 mt-8">
            <div className="flex flex-row justify-between items-center">
                <div>
                    <a href="#" className="figtree font-semibold text-lg text-[#222222] flex flex-row items-center">
                        Popular homes in Kuala Lampur

                        <span className="text-3xl">
                            <RiArrowDropRightLine />
                        </span>
                    </a>
                </div>

                <div className="flex flex-row gap-x-2.5">
                    <button type="button" className={`h-6 w-6 rounded-full flex justify-center items-center border border-[#d6d3d3] text-[#d6d3d3] transition-all duration-150 ease-linear ${carouselConfig.prevSlideOff ? "cursor-not-allowed" : "hover:bg-[#d6d3d3] hover:text-black"}`} onClick={()=>{carousel("previous")}}>
                        <MdKeyboardArrowLeft />
                    </button>

                    <button type="button" className={`h-6 w-6 rounded-full flex justify-center items-center border border-[#d6d3d3] text-[#d6d3d3] transition-all duration-150 ease-linear ${carouselConfig.nextSlideOff ? "cursor-not-allowed" : "hover:bg-[#d6d3d3] hover:text-black"}`} onClick={()=>{carousel("next")}}>
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </div>

            <div className="w-full mt-2.5">
                <CommonUi services={services} itemsRef={itemsRef}/>
            </div>
        </section>
        </>
    )
}