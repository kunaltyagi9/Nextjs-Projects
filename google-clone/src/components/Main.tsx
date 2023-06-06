'use client'
import { useState } from "react";
import Image from "next/image";
import { AiOutlineSearch } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { AiFillCamera } from 'react-icons/ai';
import { useRouter } from "next/navigation";

const Main: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    
    const router = useRouter();

    const googleLogo: string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        router.push(`https://google.com/search?q=${search}`);
    }

    return (
        <div className="flex flex-col items-center mt-28">
            <Image
                src={googleLogo}
                alt="logo"
                width={270}
                height={100}
            />
            <form onSubmit={(e) => onSearchSubmit(e)} className="flex border mt-7 px-5 py-2 rounded-full w-2/5 items-center hover:shadow-md">
                <AiOutlineSearch className="text-xl text-slate-400" />
                <input 
                    type="text" 
                    className="w-full focus:outline-none ml-4" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <BiMicrophone className="text-3xl text-slate-400 mr-5" />
                <AiFillCamera className="text-3xl text-slate-400" />
            </form>
            <div className="flex mt-7">
                <button 
                    className="bg-slate-100 mr-3 py-2 px-4 text-sm rounded hover:border"
                    onClick={(e) => onSearchSubmit(e)}>Google Search</button>
                <button 
                    className="bg-slate-100 py-2 px-4 text-sm  rounded hover:border"
                    onClick={() => router.push('https://www.google.com/doodles')}>I'm Feeling Lucky</button>
            </div>
        </div>
    )
}

export default Main;