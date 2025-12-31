import { Etext } from "@/constants/Etext";

export const Experience = () => {
  return (
    <div className="flex flex-col justify-center items-center pl-20 pr-20 pb-24 pt-24 bg-gray-900">
      <div className="flex flex-col justify-center items-center">
        <p className="justify-center text-center rounded-xl bg-gray-500 w-[115px] h-7 pb-4">
          Experience
        </p>
        <p className="pt-4 pb-20">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>

      <div className=" space-y-12 ">
        {Etext.map(({ image, title, text, date }) => (
          <div className="flex justify-between gap-y-4 p-8 rounded-xl bg-gray-800 text-white w-4xl h-full">
            <div className="">
              <img src={image} alt="" />
            </div>

            <div className="w-[384px]">
              <div className="text-xl font-bold">{title} </div>
              <div className="text-base">
                <ul className="list-disc">
                  {text.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">{date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
