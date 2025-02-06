import { SelectedPage } from "@/shared/types"

import { motion } from "framer-motion"
import HText from "@/shared/HText"


const services = [
    {
      title: 'Door Repair',
      description: 'Fixing a wide range of door issues for smooth functionality.',
    },
    {
      title: 'Door Installation',
      description: 'Precise and secure installation of new doors for enhanced aesthetics and security.',
    },
    {
      title: 'Lock and Security Solutions',
      description: 'Installation, repair, and rekeying of locks for enhanced property security.',
    },
    // Add more services here
  ];


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
motion
const Service = ({ setSelectedPage}: Props) => {
  return (
    <section id="services" className="w-full bg-slate-100 py-10">

        <motion.div
            onViewportEnter={ () => setSelectedPage(SelectedPage.Services)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ delay:0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}

                }}
            >
                <div className="md:w-3/5">

                    <HText>Services</HText>

                    <p className="py-5">Our commitment to excellence, attention to detail, and use of quality materials set us apart as leaders in the industry. Customer satisfaction is our utmost priority, and we take pride in completing every project with professionalism and integrity.</p>

                </div>

            </motion.div>

            <div className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">We offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
          
        </motion.div>        
    </section>
  )
}

export default Service