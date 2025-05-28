import Card from "./Card";
import { ArrowRight, Route } from "lucide-react";
import Link from "next/link";
// import Router from "next/router";
const MovieSection = ({ title, data, bottom, id, route }) => {
  return (
    <div className=" flex  container flex-col gap-8 px-5">
      <div className="flex justify-between container items-center ">
        <p className=" font-semibold text-2xl">{title}</p>
        <Link href={`/see_more/${route}`}>
          <button className=" cursor-pointer flex items-center gap-2 px-4 py-2 ">
            <p>See more</p>
            <ArrowRight />
          </button>
        </Link>
      </div>

      <div className=" grid sm:grid-cols-3 grid-cols-2 xl:grid-cols-5 md:grid-cols-4 auto-rows-auto gap-8">
        {data?.results?.slice(bottom, bottom + 10).map((movie) => {
          {
            return (
              <Card
                key={movie.id}
                title={movie.title}
                vote_average={movie.vote_average}
                imageUrl={movie.poster_path}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default MovieSection;
