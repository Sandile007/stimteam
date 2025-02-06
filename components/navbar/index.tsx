import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.jpg";
import Link from "./Links";
import { SelectedPage } from "@/shared/types";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSeletedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage,selectedPage, setSeletedPage}: Props) => {

    const navbarBackground = isTopOfPage ? "": "bg-transparent drop-shadow";

  return (
    <nav className="flex justify-center py-2 max-w-7xl text-lg mx-auto">
      <div className= {`${navbarBackground} flex  top-0 z-30  space-x-5`}>
        <div className="mx-auto">
            <img className="w-40 bg-transparent object-contain cursor-pointer"
                src={Logo}
                alt=""
            />
        </div>
        <div className="flex items-center space-x-12 text-sm py-5">
           
            <Link page="Home"
                selectedPage = {selectedPage}
                setSeletedPage = {setSeletedPage}
            />
            <Link  page="About"
                selectedPage = {selectedPage}
                setSeletedPage = {setSeletedPage}
            />
          
            <Link page="Services"
                selectedPage = {selectedPage}
                setSeletedPage = {setSeletedPage}
            />
              <Link page="Contact"
                selectedPage = {selectedPage}
                setSeletedPage = {setSeletedPage}
            />
            
        </div>
      </div>
    </nav>
  )
}

export default Navbar