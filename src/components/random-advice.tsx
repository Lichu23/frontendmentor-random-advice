import { useState } from "react";
import iconDice from "../images/icon-dice.svg";
import patterDividerDesktop from "../images/pattern-divider-desktop.svg";
import patterDividerMobile from "../images/pattern-divider-mobile.svg"; // Add mobile image

import { Advice } from "../types/advice";
import { getAdvice } from "../services/getRandomAdvice";

export const RandomAdvice = () => {
  const [adviceName, setAdvice] = useState<Advice>();
  const [dataAlready, setDataAlready] = useState(false)

  const handleNewAdvice = async () => {
    setDataAlready(false)

    await getAdvice().then(setAdvice)
    setDataAlready(true)  
};

  return (
    <div className="lg:mt-20 md:mt-20">
      <div className="flex flex-col px-2 justify-center items-center">
        <h4 className="text-[#52ffa8] text-center text-sm uppercase">
          a d v i ce # {adviceName?.id}
        </h4>
       {!dataAlready ? <p className="text-white mt-10">Click on the dice icon</p> : (
         <p className="text-[#cee3e9] mb-4 mt-2 text-center text-[28px]">
         {adviceName?.advice}
       </p>
       )}
      </div>
      <img
        src={
          window.innerWidth <= 640 ? patterDividerMobile : patterDividerDesktop
        }
        className="object-cover ml-6 lg:absolute md:absolute sm:relative bottom-40 flex items-center"
        alt="patter divider"
      />
      <div className="bg-[#52ffa8] p-3 flex ml-56  lg:absolute md:absolute sm:relative bottom-24 rounded-[30px]">
        <button onClick={handleNewAdvice}>
          <img
            src={iconDice}
            className="object-cover w-[20px] h-[20px]"
            alt="icon dice"
          />
        </button>
      </div>
    </div>
  );
};
