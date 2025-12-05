import { Ework } from "@/constants/Ework";
import React from "react";

export const Work = () => {
  return (
    <div className="flex flex-col pl-20 pr-20 pb-24 pt-24 bg-gray-100">
      <div className="flex flex-col justify-center items-center">
        <p className="justify-center text-center rounded-xl bg-gray-300 w-[115px] h-7 pb-4">
          Work
        </p>
        <p className="pt-4 pb-20">
          Some of the noteworthy projects I have built:
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {Ework.map(({ image, title, text }, index) => (
          <div
            className="flex"
            style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
          >
            <div className="flex justify-center items-center rounded-xl w-xl h-[480px] bg-gray-400">
              <img className="w-[480px] h-96 rounded-xl" src={image} alt="" />
            </div>
            <div className="w-xl flex flex-col pt-12 pr-12 pl-12 ">
              <div className="text-xl font-bold pb-6">{title}</div>
              <div className="pb-6">{text}</div>
              <div className="w-[480px] space-x-2 space-y-2 pb-6 ">
                <button className="rounded-xl bg-gray-300 w-[79px] h-7 pb-4">
                  React
                </button>
                <button className="rounded-xl bg-gray-300 w-[87px] h-7 pb-4">
                  Next.js
                </button>
                <button className="rounded-xl bg-gray-300 w-[115px] h-7 pb-4">
                  Typescript
                </button>
                <button className="rounded-xl bg-gray-300 w-[87px] h-7 pb-4">
                  Nest.js
                </button>
                <button className="rounded-xl bg-gray-300 w-[115px] h-7 pb-4">
                  PostgreSQL
                </button>
                <button className="rounded-xl bg-gray-300 w-[115px] h-7 pb-4">
                  Tailwindcss
                </button>
                <button className="rounded-xl bg-gray-300 w-[81px] h-7 pb-4">
                  Figma
                </button>
                <button className="rounded-xl bg-gray-300 w-[115px] h-7 pb-4">
                  Cypress
                </button>
                <button className="rounded-xl bg-gray-300 w-[115px] h-7 pb-4">
                  Storybook
                </button>
                <button className="rounded-xl bg-gray-300 w-[60px] h-7 pb-4">
                  Git
                </button>
              </div>
              <a href="https://www.youtube.com/watch?v=nuvKqRtNXIo&list=RD-HzN_vXQwd0&index=3">
                <img className="w-6 h-6" src="./share.png" alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
