import React from "react";

export const Main1 = () => {
  return (
    <div className="flex color-white justify-items-center pl-20 pr-20 pt-24 pb-24">
      <div className="flex w-7xl h-[364px] ">
        <div className="w-[600px] h-[364px] flex-col  ">
          <div className="w-[376px] h-72px text-3xl font-bold flex">
            Hi, I'm James 👋
          </div>
          <div className="pt-2">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </div>
          <div className=" h-14 pt-14 pb-14">
            <div className="flex ">
              <div>
                <img src="./loc.png" alt="" />{" "}
              </div>
              <div className="pl-1">Ulaanbaatar, Mongolia</div>
            </div>
            <div className="flex pl-2 items-center">
              <div className="h-2 w-2">
                <img src="./tseg.png" alt="" />
              </div>
              <div className="pl-3"> Available for new projects</div>
            </div>
          </div>
          <div className="flex h-6 w-19 gap-2 pt-12">
            <a
              href="https://www.youtube.com/watch?v=G3UjfzsMK88&list=RDG3UjfzsMK88&start_radio=1"
              className="href"
            >
              <img src="./muur.png" alt="" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=G3UjfzsMK88&list=RDG3UjfzsMK88&start_radio=1"
              className="href"
            >
              <img src="./shuvu.png" alt="" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=G3UjfzsMK88&list=RDG3UjfzsMK88&start_radio=1"
              className="href"
            >
              <img src="./mulashib.png" alt="" />{" "}
            </a>
          </div>
        </div>
        <div className="w-[568px] h-[364px] justify-items-end">
          {" "}
          <img className="w-[280px] h-80" src="./james.webp" alt="" />
        </div>
      </div>
    </div>
  );
};
