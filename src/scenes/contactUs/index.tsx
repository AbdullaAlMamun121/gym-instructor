import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { SyntheticEvent } from 'react';
import contactImage from "@/assets/contactUs.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
 const inputStyles= `mb-5 w-full rounded-lg bg-primary-10 px-5 py-3 placeholder-white`
    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

const onSubmit = async (e: SyntheticEvent) => {
  const isValid: boolean = await trigger();
  if (!isValid) {
    e.preventDefault();
  }
};


  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-50"> JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, tempora natus quo ducimus accusamus consequatur labore officiis cum cumque sapiente!
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          >
            <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/hmdabdulla121@email.com"
            method="POST"
            >
                <input className={inputStyles}
                type="text"
                placeholder="Name"
                {...register("name",{
                    required:true,
                    maxLength:100,
                })}
                 />
                 {errors.name && (
                    <p className="mt-1 text-primary-50">
                        {errors.name.type === "required" && "This field is required"}
                        {errors.name.type === "maxLength" && "Max length is 100 char"}
                    </p>
                 )}

                 {/* email */}
                 <input className={inputStyles}
                type="email"
                placeholder="Email"
                {...register("email",{
                    required:true,
                    pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                })}
                 />
                 {errors.email && (
                    <p className="mt-1 text-primary-50">
                        {errors.email.type === "required" && "This field is required"}
                        {errors.email.type === "pattern" && "Invalid email address"}
                    </p>
                 )}
                 {/* MESSAGE */}
                 <textarea className={inputStyles}
                rows={4}
                cols={50}
                placeholder="Message"
                {...register("message",{
                    required:true,
                    maxLength:2000,
                })}
                 />
                 {errors.message && (
                    <p className="mt-1 text-primary-50">
                        {errors.message.type === "required" && "This field is required"}
                        {errors.message.type === "maxLength" && "Max length is 2000 char"}
                    </p>
                 )}
                 <button
                 type="submit"
                 className="mt-5 rounded-lg bg-secondary-50 px-20 py-3 transition duration-500 hover:text-white"
                 >
                    Submit
                 </button>
            </form>
          </motion.div>
          <motion.div
          className="relative mt-16 basis-2/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay:0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          >
            <div className="w-full ">
                <img className="w-full rounded-lg" src={contactImage} alt="" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
