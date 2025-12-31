import React from "react";

export const Main2 = () => {
  return (
    <div className=" flex flex-col bg-gray-900 items-center pl-20 pr-20 pt-24 pb-24">
      <div className="h-7 w-[105px] flex justify-center text-center rounded-xl bg-gray-500">
        About me
      </div>
      <div className="flex pt-20">
        <div className="flex w-[584px] h-[558px]">
          <img className="w-[400px] h-[480px]" src="./ochir.jpg" alt="" />
        </div>
        <div className="flex-col w-[584px] h-[558px]">
          <div className="flex font-bold font-weight-600 text-3xl pb-6">
            Curious about me? Here you have it:
          </div>
          <div className="pb-4">
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code.
          </div>
          <div className="pb-4">
            Since starting my web development journey in 2015, I've embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, I'm building cutting-edge web apps using
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </div>
          <div className="pb-4">
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, you'll find me on
            Twitter, tracking startup journeys, or unwinding. Follow me for tech
            insights and public project updates on Twitter or GitHub.
          </div>
          <div className="pb-4">Finally, some quick bits about me.</div>
          <div className="pl-3 ">
            <ul>
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
              <li>Avid learner</li>
            </ul>
          </div>
          <div className="pt-4">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </div>
        </div>
      </div>
    </div>
  );
};
