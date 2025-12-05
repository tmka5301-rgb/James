import { Experience } from "@/components/Experience";
import { Foot } from "@/components/Foot";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main1 } from "@/components/Main1";
import { Main2 } from "@/components/Main2";
import { Skills } from "@/components/Skills";
import { Tom } from "@/components/Tom";
import { Work } from "@/components/Work";

export const Home = () => {
  return (
    <div className="max-w-7xl w-full m-auto ">
      <Header />
      <Tom />
      <Main1 />
      <Main2 />
      <Skills />
      <Experience />
      <Work />
      <Foot />
      <Footer />
    </div>
  );
};
export default Home;
