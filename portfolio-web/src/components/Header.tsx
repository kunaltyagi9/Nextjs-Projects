'use client'
import { useState } from "react";
import { headerItems, userInfo } from "@/constants/constant";
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';
import { NavItems } from "@/models/Header";
import { Link as ScrollLink } from 'react-scroll';

interface IHeaderProps {
    isDesktop: boolean
}

const Header: React.FC<IHeaderProps> = ({ isDesktop }) => {
    const [navItem, showNavItem] = useState<boolean>(false);

    return (
        <header className="p-6 justify-between fixed top-0 z-10 bg-white w-full md:flex">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">{userInfo.name}</h2>
                <BiMenu 
                    size={30} 
                    className="md:hidden" 
                    onClick={() => showNavItem(prevState => !prevState)} />
            </div>
            <div className={`mr-8 md:space-x-6 md:block mt-3 md:mt-0 ${ navItem ? 'block' : 'hidden'}`}>
                {
                    Object.keys(headerItems).map(item => (
                        <ScrollLink 
                            to={headerItems[item as keyof NavItems].page} 
                            key={headerItems[item as keyof NavItems].label}
                            className="block md:inline-block cursor-pointer"
                            spy={true}
                            smooth={true}
                        >
                            {headerItems[item as keyof NavItems].label}
                        </ScrollLink>
                    ))
                }
            </div>
        </header>
    )
}

export default Header;