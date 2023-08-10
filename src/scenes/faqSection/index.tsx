import { FAQType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import  { useState } from "react";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const FAQ = ({ setSelectedPage }: Props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index: any) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const faqData:Array<FAQType> = [
      {
        question: "What is Lorem Ipsum?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        question: "Why do we use it?",
        answer:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        question: "Where does it come from?",
        answer:
          "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      },
      {
        question: "Where can I get some?",
        answer:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      },
    ];

  return (
    <section id="faq">
      <motion.div
        className="bg-gray-50 py-12"
        onViewportEnter={() => setSelectedPage(SelectedPage.FAQ)}
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <div
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between cursor-pointer"
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <span className="text-gray-500">
                    {activeIndex === index ? "▲" : "▼"}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-700">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
