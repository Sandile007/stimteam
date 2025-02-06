
import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';


type Props = {
    setSelectedPage: (vulue: SelectedPage) => void;
}

const Footer = ( {setSelectedPage}: Props) => {
  return (
    <footer className="bg-slate-200 py-5">

        <div className="container mx-auto text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Stimteam Construction Engineering. All rights reserved.
            </p>

            <div className="mt-4 flex justify-center space-x-4">
              
                
                <AnchorLink
                    className="text-gray-400 hover:text-white"
                    onClick={ () => setSelectedPage(SelectedPage.Contact)}
                    href={`#${SelectedPage.Contact}`}
                 >
                    <p> Contact Us</p>   

                </AnchorLink>
            </div>
            <div className="mt-4 flex gap-3">
                <a href="https://web.facebook.com/profile.php?id=100066475691445" className="text-gray-400 hover:text-white">
                    <FaFacebook size={24} />
                </a>
                
                <p  className="text-gray-400 hover:text-white mx-4">
                    <FaInstagram size={24} />
                </p>
                <a href='https://wa.me/+27699771656'  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <FaWhatsapp size={24} />
                </a>
    
            </div>   
        </div>
    

    </footer>
  )
}

export default Footer