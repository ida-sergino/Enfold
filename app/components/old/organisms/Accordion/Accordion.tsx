import React, { useState } from "react";
import "./Accordion.css";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container p-8 mx-auto">
      <div className="accordion-list">
        {items.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <h2>{item.title}</h2>
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
