"use client"

import { formUrlQuery } from "@/sanity/schemas/utils";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react"


const links = ['all', 'web development', 'full stack development', 'android development', 'system design', 'data strutures and algorithms', 'competitive programming', 'interview preparation']

const Filters = () => {

    const [active, setActive] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleClick = (link: string) => {
        let newUrl = "";
        
        if (active===link) {
            setActive("");
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ['category']
            })
        } else {
            setActive(link);
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                value: link.toLowerCase()
            })
        }
        
        router.push(newUrl, { scroll: false });
    }
  
    const goLeft = (id: any) => {
        if (!id) return ;
        if (id.scrollLeft !== 0) {
            id.scrollTo({
            left: id.scrollLeft - 100,
            behavior: "smooth"
            });
        }
    };
  
    const goRight = (id: any) => {
        if (!id) return ;
        id.scrollTo({
            left: id.scrollLeft + 100,
            behavior: "smooth"
        });
    };

  return (
    <div className="flex w-full max-w-full gap-2 items-center justify-center">
        <button
            onClick={() => goLeft(document.getElementById("cat-list"))}
        >
            <Image 
                src="/arrow_left.svg"
                alt="arrow_left"
                width={20}
                height={20}
                className="object-contain"
            />
        </button>
        <ul id="cat-list" className='text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl'>
            {links.map((link) => (
                <button
                    key={link}
                    onClick={() => handleClick(link)}
                    className={`${active===link && "gradient_blue-purple"} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
                >
                    {link}
                </button>
            ))}
        </ul>
        <button
            onClick={() => goRight(document.getElementById("cat-list"))}
        >
            <Image 
                src="/arrow_right.svg"
                alt="arrow_right"
                width={20}
                height={20}
                className="object-contain"
            />
        </button>
    </div>
  )
}

export default Filters