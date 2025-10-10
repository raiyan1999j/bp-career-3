import { useEffect, useRef, useState } from "react";
import type { MenuConfigType } from "./menu";
import { RxCross2 } from "react-icons/rx";
import { BsTranslate } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

type PropsType = {
    globeModal: boolean,
    setMenuConfig: React.Dispatch<React.SetStateAction<MenuConfigType>>
}

type ElementsType = {
    title:string,
    info:string
}

type TabContentType = {
    headline:string,
    elements:ElementsType[]
}

const tabMenu: string[] = ["Language and region","Currency"];

const tabContent:TabContentType[] = [
    {
        headline:"Choose a language and region",
        elements:[
        {
        title: "English",
        info: "United States"
    },
    {
        title: "Azərbaycan dili",
        info: "Azərbaycan"
    },
    {
        title: "Bahasa Indonesia",
        info: "Indonesia"
    },
    {
        title: "Bosanski",
        info: "Bosna i Hercegovina"
    },
    {
        title: "Català",
        info: "Espanya"
    },
    {
        title: "Čeština",
        info: "Česká republika"
    },
    {
        title: "Crnogorski",
        info: "Crna Gora"
    },
    {
        title: "Dansk",
        info: "Danmark"
    },
    {
        title: "Deutsch",
        info: "Deutschland"
    },
    {
        title: "Deutsch",
        info: "Österreich"
    },
    {
        title: "Deutsch",
        info: "Schweiz"
    },
    {
        title: "Deutsch",
        info: "Luxemburg"
    },
    {
        title: "Eesti",
        info: "Eesti"
    },
    {
        title: "English",
        info: "Australia"
    },
    {
        title: "English",
        info: "Canada"
    },
    {
        title: "English",
        info: "Guyana"
    },
    {
        title: "English",
        info: "India"
    },
    {
        title: "English",
        info: "Ireland"
    },
    {
        title: "English",
        info: "New Zealand"
    },
    {
        title: "English",
        info: "Singapore"
    },
    {
        title: "English",
        info: "United Arab Emirates"
    },
    {
        title: "English",
        info: "United Kingdom"
    },
    {
        title: "Español",
        info: "Argentina"
    },
    {
        title: "Español",
        info: "Belice"
    },
    {
        title: "Español",
        info: "Bolivia"
    },
    {
        title: "Español",
        info: "Chile"
    },
    {
        title: "Español",
        info: "Colombia"
    },
    {
        title: "Español",
        info: "Costa Rica"
    },
    {
        title: "Español",
        info: "Ecuador"
    },
    {
        title: "Español",
        info: "El Salvador"
    },
    {
        title: "Español",
        info: "España"
    },
    {
        title: "Español",
        info: "Estados Unidos"
    },
    {
        title: "Español",
        info: "Guatemala"
    },
    {
        title: "Español",
        info: "Honduras"
    },
    {
        title: "Español",
        info: "Latinoamérica"
    },
    {
        title: "Español",
        info: "México"
    },
    {
        title: "Español",
        info: "Nicaragua"
    },
    {
        title: "Español",
        info: "Panamá"
    },
    {
        title: "Español",
        info: "Paraguay"
    },
    {
        title: "Español",
        info: "Perú"
    },
    {
        title: "Español",
        info: "Venezuela"
    },
    {
        title: "Français",
        info: "Belgique"
    },
    {
        title: "Français",
        info: "Canada"
    },
    {
        title: "Français",
        info: "France"
    },
    {
        title: "Français",
        info: "Suisse"
    },
    {
        title: "Français",
        info: "Luxembourg"
    },
    {
        title: "Gaeilge",
        info: "Éire"
    },
    {
        title: "Hrvatski",
        info: "Hrvatska"
    },
    {
        title: "isiXhosa",
        info: "eMzantsi Afrika"
    },
    {
        title: "isiZulu",
        info: "iNingizimu Afrika"
    },
    {
        title: "Íslenska",
        info: "Ísland"
    },
    {
        title: "Italiano",
        info: "Italia"
    },
    {
        title: "Italiano",
        info: "Svizzera"
    },
    {
        title: "Kiswahili",
        info: "Āfrika"
    },
    {
        title: "Latviešu",
        info: "Latvija"
    },
    {
        title: "Lietuvių",
        info: "Lietuva"
    },
    {
        title: "Magyar",
        info: "Magyarország"
    },
    {
        title: "Malti",
        info: "Malta"
    },
    {
        title: "Melayu",
        info: "Malaysia"
    },
    {
        title: "Vlaams",
        info: "België"
    },
    {
        title: "Nederlands",
        info: "Nederland"
    },
    {
        title: "Norsk",
        info: "Norge"
    },
    {
        title: "Polski",
        info: "Polska"
    },
    {
        title: "Português",
        info: "Brasil"
    },
    {
        title: "Português",
        info: "Portugal"
    },
    {
        title: "Română",
        info: "România"
    },
    {
        title: "Shqip",
        info: "Shqipëri"
    },
    {
        title: "Slovenčina",
        info: "Slovensko"
    },
    {
        title: "Slovenščina",
        info: "Slovenija"
    },
    {
        title: "Srpski",
        info: "Srbija"
    },
    {
        title: "Suomi",
        info: "Suomi"
    },
    {
        title: "Svenska",
        info: "Sverige"
    },
    {
        title: "Tagalog",
        info: "Pilipinas"
    },
    {
        title: "Tiếng Việt",
        info: "Việt Nam"
    },
    {
        title: "Türkçe",
        info: "Türkiye"
    },
    {
        title: "Ελληνικά",
        info: "Ελλάδα"
    },
    {
        title: "Български",
        info: "България"
    },
    {
        title: "Македонски",
        info: "Северна Македонија"
    },
    {
        title: "Русский",
        info: "Россия"
    },
    {
        title: "Українська",
        info: "Україна"
    },
    {
        title: "ქართული",
        info: "საქართველო"
    },
    {
        title: "Հայերեն",
        info: "Հայաստան"
    },
    {
        title: "עברית",
        info: "ישראל"
    },
    {
        title: "العربية",
        info: "العالم"
    },
    {
        title: "हिन्दी",
        info: "भारत"
    },
    {
        title: "ಕನ್ನಡ",
        info: "ಭಾರತ"
    },
    {
        title: "मराठी",
        info: "भारत"
    },
    {
        title: "ไทย",
        info: "ประเทศไทย"
    },
    {
        title: "한국어",
        info: "대한민국"
    },
    {
        title: "日本語",
        info: "日本"
    },
    {
        title: "简体中文",
        info: "美国"
    },
    {
        title: "繁體中文",
        info: "美國"
    },
    {
        title: "简体中文",
        info: "中国"
    },
    {
        title: "繁體中文",
        info: "香港"
    },
    {
        title: "繁體中文",
        info: "台灣"
    }
    ]
    },
    {
        headline:"Choose a currency",
        elements:[  
    {
        title: "United States dollar",
        info: "USD – $"
    },
    {
        title: "Australian dollar",
        info: "AUD – $"
    },
    {
        title: "Brazilian real",
        info: "BRL – R$"
    },
    {
        title: "Bulgarian lev",
        info: "BGN – лв."
    },
    {
        title: "Canadian dollar",
        info: "CAD – $"
    },
    {
        title: "Chilean peso",
        info: "CLP – $"
    },
    {
        title: "Chinese yuan",
        info: "CNY – ￥"
    },
    {
        title: "Colombian peso",
        info: "COP – $"
    },
    {
        title: "Costa Rican colon",
        info: "CRC – ₡"
    },
    {
        title: "Czech koruna",
        info: "CZK – Kč"
    },
    {
        title: "Danish krone",
        info: "DKK – kr"
    },
    {
        title: "Egyptian pound",
        info: "EGP – ج.م"
    },
    {
        title: "Emirati dirham",
        info: "AED – ﺩ.ﺇ"
    },
    {
        title: "Euro",
        info: "EUR – €"
    },
    {
        title: "Ghanaian cedi",
        info: "GHS – GH₵"
    },
    {
        title: "Hong Kong dollar",
        info: "HKD – $"
    },
    {
        title: "Hungarian forint",
        info: "HUF – Ft"
    },
    {
        title: "Indian rupee",
        info: "INR – ₹"
    },
    {
        title: "Indonesian rupiah",
        info: "IDR – Rp"
    },
    {
        title: "Israeli new shekel",
        info: "ILS – ₪"
    },
    {
        title: "Japanese yen",
        info: "JPY – ¥"
    },
    {
        title: "Kazakhstani tenge",
        info: "KZT – ₸"
    },
    {
        title: "Kenyan shilling",
        info: "KES – KSh"
    },
    {
        title: "Malaysian ringgit",
        info: "MYR – RM"
    },
    {
        title: "Mexican peso",
        info: "MXN – $"
    },
    {
        title: "Moroccan dirham",
        info: "MAD"
    },
    {
        title: "New Taiwan dollar",
        info: "TWD – $"
    },
    {
        title: "New Zealand dollar",
        info: "NZD – $"
    },
    {
        title: "Norwegian krone",
        info: "NOK – kr"
    },
    {
        title: "Peruvian sol",
        info: "PEN – S/"
    },
    {
        title: "Philippine peso",
        info: "PHP – ₱"
    },
    {
        title: "Polish zloty",
        info: "PLN – zł"
    },
    {
        title: "Pound sterling",
        info: "GBP – £"
    },
    {
        title: "Qatari riyal",
        info: "QAR – ر.ق"
    },
    {
        title: "Romanian leu",
        info: "RON – lei"
    },
    {
        title: "Saudi Arabian riyal",
        info: "SAR – SR"
    },
    {
        title: "Singapore dollar",
        info: "SGD – $"
    },
    {
        title: "South African rand",
        info: "ZAR – R"
    },
    {
        title: "South Korean won",
        info: "KRW – ₩"
    },
    {
        title: "Swedish krona",
        info: "SEK – kr"
    },
    {
        title: "Swiss franc",
        info: "CHF"
    },
    {
        title: "Thai baht",
        info: "THB – ฿"
    },
    {
        title: "Turkish lira",
        info: "TRY – ₺"
    },
    {
        title: "Ugandan shilling",
        info: "UGX – USh"
    },
    {
        title: "Ukrainian hryvnia",
        info: "UAH – ₴"
    },
    {
        title: "Uruguayan peso",
        info: "UYU – $U"
    },
    {
        title: "Vietnamese dong",
        info: "VND – ₫"
    }
        
    ]
    }
]

export default function GlobeModal({globeModal,setMenuConfig}:PropsType){
    const closeDetection = useRef<HTMLDivElement|null>(null);
    const [currentTab,setCurrentTab] = useState<number>(0);
    const [translator,setTranslator] = useState<boolean>(false);

    useEffect(()=>{
        function handleClose(event: MouseEvent){
            if(closeDetection.current && !closeDetection.current.contains(event.target as Node)){
                setMenuConfig(prev=>({...prev,globeMenu:false}))
            }
        }

        if(globeModal) document.addEventListener("mousedown",handleClose);

        return ()=>document.removeEventListener("mousedown",handleClose)
    },[globeModal,setMenuConfig])
    return(
        <>
        <section className={`h-full w-screen bg-black/20 fixed top-0 left-0 py-[5%] px-[15%] z-50 ${globeModal?"opacity-100":"opacity-0 pointer-events-none"}`}>

            <div className={`w-full bg-white rounded-xl py-6 transition-all duration-150 ease-linear ${globeModal?"translate-y-0 opacity-100":"translate-y-1/2 opacity-50"}`} ref={closeDetection}>
                <div className="px-6">
                    <button className="h-6 w-6 flex justify-center items-center rounded-full transition-all duration-75 ease-linear hover:bg-[#EBEBEB] hover:cursor-pointer" onClick={()=>{setMenuConfig(prev=>({...prev,globeMenu:false}))}}>
                        <RxCross2 />
                    </button>
                </div>

                <div className="h-[507px] overflow-y-auto modalScrollbar px-6">

                <div className="flex flex-row gap-x-[6px] border-b border-[#DDDDDD]">
                    {
                        tabMenu.map((items,index)=>{
                            return <button className={`figtree font-medium text-base px-1 py-2 relative hover:cursor-pointer ${currentTab === index ?"after:absolute after:h-[2px] after:w-full after:bg-black/80 after:left-0 after:bottom-0 after:rounded-lg text-black":"text-[#6A6A6A] transition-all duration-150 ease-linear hover:text-black"}`} key={index} onClick={()=>{setCurrentTab(index)}}>
                                {items}
                            </button>
                        })
                    }
                </div>
                
                {
                    currentTab === 0?
                    <div className="flex flex-row w-[65%] justify-between items-center mt-12 bg-black/5 py-[15px] px-4 rounded-lg">
                    <div>
                        <h4 className="figtree font-normal text-lg capitalize flex flex-row gap-x-1.5">
                            translation

                            <span>
                                <BsTranslate />
                            </span>
                        </h4>

                        <p className="figtree font-normal text-base text-[#6A6A6A]">
                            Automatically translate descriptions and reviews to English.
                        </p>
                    </div>

                    <div>
                        <label htmlFor="translator">
                            <input type="checkbox" defaultChecked={translator} name="translator" id="translator" className="hidden" onChange={()=>{setTranslator(!translator)}}/>
                        <div className="w-12 h-8 rounded-full bg-[#8C8C8C] relative">
                            <div className={`h-7 w-7 absolute top-0.5 flex justify-center items-center bg-white rounded-full ${translator?"right-0.5":"left-0.5"}`}>
                                {
                                    translator?
                                    <span className="text-[#8C8C8C]">
                                        <FaCheck />
                                    </span>:
                                    null
                                }
                            </div>
                        </div>
                        </label>
                    </div>
                    </div>:
                    null
                }

                <div className="mt-12">
                    <h3 className="figtree font-medium text-2xl text-black">
                        {tabContent[currentTab].headline}
                    </h3>

                    <div className="grid grid-cols-5 gap-x-4 gap-y-4 mt-6">
                        {
                            tabContent[currentTab].elements.map((items,index)=>{
                                return <a className="p-2 flex flex-col hover:bg-black/5 rounded-xl" href="#" key={index}>
                                    <span className="figtree font-normal text-base text-black">
                                        {items.title}
                                    </span>
                                    <span className="figtree font-normal text-base text-[#6A6A6A]">
                                        {items.info}
                                    </span>
                                </a>
                            })
                        }
                    </div>
                </div>

                </div>
            </div>
        </section>
        </>
    )
}