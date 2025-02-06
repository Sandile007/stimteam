import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form"
import HText from "@/shared/HText";
import ContactUsPageGraphic from "@/assets/contact-us.jpg"
import { FaMapMarkerAlt } from "react-icons/fa";

type Props = {
    setSelectedPage: (vulue: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {

    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const inputSyles = `mt-5 w-full rounded-lg bg-slate-200 px-5 py-3 placeholder-light`;

    const onSubmit =async (e: any) => {
        const isValid = await trigger();

        if(!isValid){
            e.preventDefault();
        }
    }

  return (
    <section id="contact" className="mx-auto w-5/6 pt-10 pb-10 ">

        <motion.div onViewportEnter={ () => setSelectedPage(SelectedPage.Contact)}>

            { /* Header */ }
            <motion.div
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ delay:0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}

                }}
            >
                <HText> 
                  <span className="text-primary-500 px-16">Contact Us</span>  
                </HText>
                  <p className="my-5 px-10">
                    Have questions or need assistance? Reach out to us today.
                  </p>
                
            </motion.div>

            { /* Form and Image */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                    className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    transition={{ delay:0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50},
                        visible: { opacity: 1, y: 0}
    
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={ onSubmit}
                        action="https://formsubmit.co/e321b385938224d2efeaeb0b076e4e4a"
                        method="POST"
                    >

                        
                        <input
                           className= {inputSyles} 
                           type="text"
                           placeholder="NAME"
                           {...register("name",{
                            required: true,
                            maxLength: 100
                           })}
                        
                        />
                        {errors.name && (
                            <p className="mt-1 text-red-500">
                                {errors.name.type === "required" && "This filed is rerequired"}
                                {errors.name.type === "maxLength" && "Max length is 100 characters"}
                            </p>
                        )}

                        <input
                           className= {inputSyles} 
                           type="text"
                           placeholder="EMAIL"
                           {...register("email",{
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                           })}
                        
                        />
                        {errors.email && (
                            <p className="mt-1 text-red-500">
                                {errors.email.type === "required" && "This filed is rerequired"}
                                {errors.email.type === "pattern" && "Invalid email entered"}
                            </p>
                        )}


                        <textarea
                           className= {inputSyles} 
                           rows={4}
                           cols={50}
                           placeholder="Message"
                           {...register("message",{
                            required: true,
                            maxLength: 2000
                           })}
                        
                        />
                        {errors.message && (
                            <p className="mt-1 text-red-500">
                                {errors.message.type === "required" && "This filed is rerequired"}
                                {errors.message.type === "maxLength" && "Max length is 2000 characters"}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mt-5 rounded-lg bg-amber-400 px-20 py-3 transition duration-500 hover:text-white"
                        >
                            SUBMIT
                        </button>

                    </form>

                </motion.div>

                <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] ">
                        <img
                            className="w-full h-[350px] "
                            alt="contact-us-page-graphic"
                            src={ContactUsPageGraphic}
                        />
                    </div>
                </motion.div>

            </div>

        </motion.div>

        <div className="p-6 mt-5 bg-slate-100  rounded-lg shadow-md">
            
            <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
               
            
            <p className="text-gray-600">
              You can also reach us at:
            </p>
            
            <p className="text-lg mt-2">
              <span className="text-primary-500 font-semibold">Phone:</span> (071) 386 9164

            </p>
            <p className="text-lg">
              <span className="text-primary-500 font-semibold">Email:</span> info@stimteamconstruction.co.za
            </p>

           
              
              <div className="">
                <p className="text-xl font-semibold my-2 ">
                  Address:
                </p>
                <p className="text-primary-500">
                70 Flowers Street, Capital Park, Pretoria
                </p>
              </div>
            
            
           
        </div>

       

    </section>
  )
}

export default ContactUs