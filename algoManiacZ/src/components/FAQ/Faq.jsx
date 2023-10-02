import { useState } from "react";
import Panel from "./Panel";
import { panelData } from "../../utils/PanelData";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handlePanelClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="faq">
      <div className="lg:h-[calc(100vh-112px)] h-screen text-textColor bg-backgroundBody w-full flex flex-col justify-center gap-y-5 items-center">
        <h1 className="text-6xl font-bold mt-2">FAQs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full px-5 md:px-20 pt-5 gap-3 md:gap-x-5">
          {panelData.map((panel, index) => (
            <Panel
              key={index}
              title={panel.title}
              isActive={activeIndex === index}
              onShow={() => handlePanelClick(index)}
            >
              {panel.content}
            </Panel>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Faq;
