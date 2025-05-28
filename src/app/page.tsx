import Footer from "@/components/HomeComponents/Footer";
import Navigation from "@/components/HomeComponents/Navigation";
import Poster from "@/components/HomeComponents/Poster";
import { posters } from "@/data/posters";
const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Navigation></Navigation>
      <section
        className={`flex w-full h-[300px]  md:h-[400px]  lg:h-[500px] xl:h-[600px] 2xl:h-[750px] overflow-x-scroll no-scrollbar overflow-y-clip snap-x `}
      >
        {posters.map(({ title, description, imageLocation }) => {
          return (
            <Poster
              key={title}
              title={title}
              description={description}
              imageLocation={imageLocation}
            />
          );
        })}
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
