import Footer from "@/components/HomeComponents/Footer";
import MovieSection from "@/components/HomeComponents/MovieSection";
import Navigation from "@/components/HomeComponents/Navigation";
import Poster from "@/components/HomeComponents/Poster";
const data = [
  { title: "Upcoming", bottom: 0, route: "upcoming" },
  { title: "Popular", bottom: 0, route: "popular" },
  { title: "Top Rated", bottom: 0, route: "top_rated" },
];
const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Navigation></Navigation>

      <Poster></Poster>

      <section className="flex flex-col gap-13 mt-8 ">
        {data.map((section) => {
          return (
            <MovieSection
              key={section.title}
              title={section.title}
              bottom={section.bottom}
              route={section.route}
              page={1}
            ></MovieSection>
          );
        })}
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
