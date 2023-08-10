import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import banefitsGraphics from "@/assets/benefitGraphic.jpg";
import { Carousel } from "react-responsive-carousel";
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "culpa voluptatem dolorum repudiandae ex, odit iste ab molestias doloribus dignissimos deserunt ut incidunt pariatur nisi at numquam.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "200's of Divers Classes",
    description:
      "culpa voluptatem dolorum repudiandae ex, odit iste ab molestias doloribus dignissimos deserunt ut incidunt pariatur nisi at numquam.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainer",
    description:
      "culpa voluptatem dolorum repudiandae ex, odit iste ab molestias doloribus dignissimos deserunt ut incidunt pariatur nisi at numquam.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER SECTION */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            nesciunt nemo maxime, culpa voluptatem dolorum repudiandae ex, odit
            iste ab molestias doloribus dignissimos deserunt ut incidunt
            pariatur nisi at numquam.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="md:flex items-ceneter justify-between gap-8 mt-5"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTIONS */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHICS */}
          {/* <img
            className="mx-auto w-3/5 sm:mb-5"
             src={banefitsGraphics}
            alt=""
          /> */}
           <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            className="mx-auto w-4/5 sm:mb-5"
          >
          
              <img  src={banefitsGraphics} alt="Image 1" />
              <img src={banefitsGraphics} alt="Image 2" />
              <img  src={banefitsGraphics} alt="Image 3" />
        
          </Carousel>
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-50">FIT</span>
                </HText>
              </motion.div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque hic aliquam eveniet illo fugiat, aut maiores tenetur
                velit unde! Autem aliquam excepturi necessitatibus ut velit
                omnis, provident nam numquam quis?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates libero sequi quisquam unde deleniti saepe obcaecati
                eos, natus ipsam labore fuga sed? Blanditiis, nobis at
                accusantium illum cumque laudantium dolorem.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="mt-16">
              <div>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
