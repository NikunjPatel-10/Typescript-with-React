import React, { useState } from "react";
import "./Accordion.css";

const Accordion: React.FC = () => {
  const [isActive, setIsActive] = useState<null | number>(null);

  const data = [
    {
      header: " Accordion Item #1",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dnfkfdnc kdnmlkdnflkdfkl ",
    },
    {
      header: " Accordion Item #2",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dnfkfdnc kdnmlkdnflkdfkl",
    },
  ];

  const accordionHandler = (index: number) => {
    setIsActive(index === isActive ? null : index);
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="accordion" key={index}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-btn"
                  onClick={() => accordionHandler(index)}
                >
                  {item.header}
                  <span
                    className={`accordion-icon  ${
                      isActive === index ? "open" : " "
                    }`}
                  >
                    &#9660;
                  </span>
                </button>
              </h2>

              {isActive === index && (
                <div className="accordion-body">{item.description}</div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
