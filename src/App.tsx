import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/components/home";
import About from "@/components/about";
import ContactUs from "@/components/contact";
import Footer from "@/components/footer";
import Service from "@/components/offers";

ContactUs

function App(){

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
 
  useEffect( () =>{
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }else{
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[]);

  return <div className="app ">
    <Navbar 
      isTopOfPage= {isTopOfPage}
      selectedPage = {selectedPage}
      setSeletedPage = {setSelectedPage}
    />
    <Home setSelectedPage = {setSelectedPage}/>
    <About setSelectedPage = {setSelectedPage}/>
    <Service  setSelectedPage = {setSelectedPage}/>
    <ContactUs setSelectedPage = { setSelectedPage} />
    <Footer setSelectedPage = { setSelectedPage} />
  </div>;
}

export default App;