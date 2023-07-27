import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HeaderImage from '@/assets/Header.png'
import sponsoreOne from "@/assets/sponsore-1.png"
import sponsoreTwo from "@/assets/sponsore-2.png"
import sponsoreThree from "@/assets/sponsore-3.png"
import sponsoreFour from "@/assets/sponsore-4.png"
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage)=> void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/*IMAGE & MAIN HEADER */}
        <motion.div
         className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
         onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
         >
            {/* MAIN HEADER */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* HEADING */}
                <motion.div
                 className="md:-mt-20"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once:true, amount: 0.5}}
                 transition={{duration:0.5}}
                 variants={{
                    hidden:{ opacity:0, x:-50},
                    visible:{opacity:1, x:0}
                 }}
                 >
                    <div className="relative">
                        <div className="before:absolute">
                            <h1 className="font-bold text-[55px] uppercase">my_gym</h1>
                        </div>
                    </div>
                    <p className="mt-8 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quidem sequi vero. Cum cumque quae voluptate
                    </p>
                </motion.div>
                {/* ACTIONS */}
                <motion.div 
                className="mt-8 flex items-center gap-8"
                initial="hidden"
                 whileInView="visible"
                 viewport={{once:true, amount: 0.5}}
                 transition={{delay:0.2, duration:0.5}}
                 variants={{
                    hidden:{ opacity:0, x:-50},
                    visible:{opacity:1, x:0}
                 }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink
                     className="text-sm font-bold text-primary-50 underline hover:text-secondary-50"
                     onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
                     href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>
            {/* IMAGE */}
            <div className="flex basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-items-end">
                <img className="md:w-3/5 md:h-[300px]" src={HeaderImage} alt="Header" />
            </div>
        </motion.div>
        {/* SPONSORS */}
        {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-10 py-10">
                <div className="mx-auto w-5/6 -mt-10">
                    <div className="flex w-3/5 items-center justify-center gap-8">
                        <img src={sponsoreOne} alt="sponsore one" />
                        <img src={sponsoreTwo} alt="sponsore two" />
                        <img src={sponsoreThree} alt="sponsore three" />
                        <img src={sponsoreFour} alt="sponsore four" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home;