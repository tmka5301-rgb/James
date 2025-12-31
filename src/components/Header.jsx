import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-between pl-10 bg-gray-900 items-center pl-20 pr-20 pb-3 pt-3 ">
      <div className="h9 text-3xl font-bold">Tutu</div>
      <div className="flex justify-between pr-10 gap-5 items-center">
        <a
          href="https://www.youtube.com/watch?v=G3UjfzsMK88&list=RDG3UjfzsMK88&start_radio=1"
          className="href"
        >
          About
        </a>
        <button>Work</button>
        <button>Testimonials</button>
        <button>Contact</button>
        <button>
          <img src="./divider.png" alt="" />
        </button>
        <button>
          <img className="w-9 h-9 " src="./nar.png" alt="" />
        </button>
        <button className="w-34 h-9 bg-black rounded-xl text-white ">
          Download CV
        </button>
      </div>
    </div>
  );
};
