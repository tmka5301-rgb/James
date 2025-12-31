import React from "react";

export const Foot = () => {
  return (
    <div className="flex flex-col pl-20 pr-20 pb-24 pt-24">
      <div className="flex flex-col justify-center items-center">
        <p className=" justify-center text-center rounded-xl bg-gray-500 w-[115px] h-7 pb-4">
          Get in touch
        </p>
        <p className="pt-4 pb-20 w-xl text-center">
          What's next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col w-[436px] items-center justify-center ">
          <div className="flex gap-4 items-center">
            <img className="w-8 h-8" src="./msg.png" alt="" />
            <div className="text-2xl font-bold ">Tutu@uruuulsudlal.mn</div>
            <img className="w-8 h-8" src="./copy.png" alt="" />
          </div>
          <div className="flex gap-4 items-center pt-5">
            <img className="w-8 h-8" src="./call.png" alt="" />
            <div className="text-2xl font-bold ">+976 88112233</div>
            <img className="w-8 h-8" src="./copy.png" alt="" />
          </div>
        </div>
      </div>
      <div className="pt-[50px] flex items-center justify-center flex-col">
        <p>You may also find me on these platforms!</p>
        <div className="flex pt-2 gap-3">
          <a href="https://www.youtube.com/watch?v=nuvKqRtNXIo&list=RD-HzN_vXQwd0&index=3">
            <img src="./muur.png" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=nuvKqRtNXIo&list=RD-HzN_vXQwd0&index=3">
            <img src="./shuvu.png" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=nuvKqRtNXIo&list=RD-HzN_vXQwd0&index=3">
            <img src="./mulashib.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
