import HText from "@/shared/HText";
import { AboutType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import AboutUs from "./AboutUs";
import ActionButton from "@/shared/ActionButton";
import AboutPageGraphic from "@/assets/door-knob.jpg"
import { Helmet } from "react-helmet-async";


const about: Array<AboutType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Door Installation",
        description: "Whether you're upgrading to a new door style or need a replacement, our skilled team ensures precise and secure installations that enhance both the look and security of your space."
    },
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Door Repairs",
        description: "Our experienced technicians are equipped to fix a wide range of door issues, from squeaky hinges and sticking locks to damaged frames. We'll have your doors functioning smoothly in no time."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Consultation and Advice",
        description: "Not sure what service you need? Our experts are here to provide guidance and recommendations tailored to your situation."
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const About = ( { setSelectedPage }: Props) => {
  return (
    <section
        id="about"
        className="mx-auto min-h-full w-5/6"
    >
        <Helmet>
            <title>About</title>
            <meta name="description" 
                content="Learn about what we offer." />
                <link rel="canonical" href="#about" />
        </Helmet>
        <motion.div
            onViewportEnter={ () => setSelectedPage(SelectedPage.About)}
        >
            {/*Header */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}

                }}
                >
                
                
            </motion.div>

            { /* About */}
            <motion.div 
                className="mt-5 items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport={ {once: true, amount: 0.5}}
                variants={container}
                >

                {about.map( (about: AboutType) =>
                    <AboutUs
                        key={about.title}
                        icon={about.icon}
                        title={about.title}
                        description={about.description}
                        setSelectedPage={setSelectedPage}
                    />
                

                )}

            </motion.div>
            
            {/* Graphics and description */}

            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* Graphic */}

                <img 
                    className="mx-auto w-[450px]"
                    alt="about-page-graphic"
                    src= {AboutPageGraphic}
                />

                { /* Description */}
                <div>
                    {/* Title */}

                    <div className="relative">

                        <div className="before:absolute before:-top-20 before:-left-20 ">
                            <motion.div
                                 initial="hidden"
                                 whileInView="visible"
                                 viewport={{ once: true, amount: 0.5}}
                                 transition={{ duration: 0.5 }}
                                 variants={{
                                     hidden: { opacity: 0, x: 50},
                                     visible: { opacity: 1, x: 0}
                 
                                 }}
                            >
                                <HText >
                                   About Us
                                  
                                </HText>
                            </motion.div>

                        </div>

                    </div>

                    { /* Descrpt */}
                    <motion.div
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5}}
                         transition={{ delay: 0.2, duration: 0.5 }}
                         variants={{
                             hidden: { opacity: 0, x: 50},
                             visible: { opacity: 1, x: 0}
         
                         }}
                    >
                        <p className="my-5">
                        We understand the importance of functional and secure doors for your property. 
                        Our skilled team of technicians is dedicated to delivering efficient and reliable door repair and installation services that exceed your expectations.
                        </p>
                        <p className="mb-5">
                        Whether you're facing a broken hinge, a misaligned door frame, or simply looking to upgrade your doors for enhanced aesthetics and security, we've got you covered. We offer a wide range of services tailored to residential and commercial clients, ensuring that your doors are in the best condition possible
                        </p>
                    </motion.div>

                    { /* Button */}

                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 ">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Get quote
                            </ActionButton>
                        </div>

                    </div>

                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default About