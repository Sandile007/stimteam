import useMediaQuery from "@/hooks/useMediaQueries";
import { SelectedPage } from "@/shared/types";
import HomeImage from "@/assets/real-estate-374190_1280.jpg";
import Image1 from "@/assets/portrait-man-room-opening-door-with-hands-gloves.jpg";
import Image2 from "@/assets/pexels-ksenia-chern.jpg";
import Image3 from "@/assets/garage-door-2578744_1280.jpg";
import Image5 from "@/assets/exit-419280_1280.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
    HomeImage,
    Image1,
    Image2,
    Image3,
    Image5,
    
  ];


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage}: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
      }, []);

  return (
    <section
        id="home"
        className="h-screen relative overflow-hidden w-11/12 mx-auto"
    >
      
      <motion.img
        src={images[currentImage]}
        alt="Slideshow"
        className="object-cover h-full w-full absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        key={currentImage}
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-4">Welcome to Our Website</h1>
          <p className="text-gray-600">
            Discover the best door repair and installation services in town.
          </p>
        </div>
      </div>
      
                
    </section>

    
  )
};

export default Home;