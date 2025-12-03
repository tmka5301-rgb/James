import { Header } from "@/components/Header";
import { Main1 } from "@/components/Main1";
import { Main2 } from "@/components/Main2";
import { Skills } from "@/components/Skills";
import { Tom } from "@/components/Tom";

export const Home = () => {
  return (
    <div className="max-w-7xl w-full m-auto">
      <Header />
      <Tom />
      <Main1 />
      <Main2 />
      <Skills />
    </div>
  );
};
export default Home;
