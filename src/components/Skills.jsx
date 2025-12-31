import { stacks } from "@/constants/Stacks";
import { stacks2 } from "@/constants/Stacks2";

export const Skills = () => {
  return (
    <div className="flex  flex-col justify-center items-center pl-20 pr-20 pb-24 pt-24 bg-gray-900">
      <div className="flex flex-col justify-center items-center">
        <p className="text-center bg-gray-500 rounded-xl w-[75px] h-7">
          Skills
        </p>
        <p className="text-center pt-4">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex flex-col pt-12">
        <div className="flex gap-12">
          {stacks.map(({ image, title, width, widthImg }) => (
            <div
              className="flex flex-col items-center justify-center h-[100px]"
              style={{ width }}
            >
              <div className="h-16" style={{ whidth: widthImg }}>
                <img src={image} alt="" />
              </div>

              <div className="text-lg font-normal">{title} </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col pt-12">
        <div className="flex gap-12">
          {stacks2.map(({ image, title, width, widthImg }) => (
            <div
              className="flex flex-col items-center justify-center h-[100px]"
              style={{ width }}
            >
              <div className="h-16" style={{ whidth: widthImg }}>
                <img src={image} alt="" />
              </div>

              <div className="text-lg font-normal">{title} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
