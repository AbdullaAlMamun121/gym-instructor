import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Adipisci,atque laudantium voluptatibus fugit rerum optio alias quia repellendus saepe sapiente quae amet? Veniam minima eaque est necessitatibus laborum perferendis ullam.",
    image: image1,
  },
  {
    name: "Fitness Classes",
    description:
      "Adipisci,atque laudantium voluptatibus fugit rerum optio alias quia repellendus saepe sapiente quae amet? Veniam minima eaque est necessitatibus laborum perferendis ullam.",
    image: image2,
  },
  {
    name: "Training Classes",
    description:
      "Adipisci,atque laudantium voluptatibus fugit rerum optio alias quia repellendus saepe sapiente quae amet? Veniam minima eaque est necessitatibus laborum perferendis ullam.",
    image: image3,
  },
  {
    name: "Ab core Classes",
    description:
      "Adipisci,atque laudantium voluptatibus fugit rerum optio alias quia repellendus saepe sapiente quae amet? Veniam minima eaque est necessitatibus laborum perferendis ullam.",
    image: image4,
  },
  {
    name: "Yoga Classes",
    description:
      "Adipisci,atque laudantium voluptatibus fugit rerum optio alias quia repellendus saepe sapiente quae amet? Veniam minima eaque est necessitatibus laborum perferendis ullam.",
    image: image5,
  },
  {
    name: "Adventure Classes",
    description:
      "Adipisci,atque laudantium voluptatibus fugit rerum optio alias quia repellendus saepe sapiente quae amet? Veniam minima eaque est necessitatibus laborum perferendis ullam.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className="w-full bg-primary-10 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES CATEGORY</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              atque laudantium voluptatibus fugit rerum optio alias quia
              repellendus saepe sapiente quae amet? Veniam minima eaque est
              necessitatibus laborum perferendis ullam.
            </p>
          </div>
        </motion.div>
        {/* SCROLLING CLASSES */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default OurClasses;
