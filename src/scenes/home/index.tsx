import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";

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
        {/*HEADING MAIN HEADER */}
        <div>
            {/* MAIN HEADER */}
            <div></div>
            {/* HEADING */}
            <div></div>
        </div>
    </section>
  )
}

export default Home;