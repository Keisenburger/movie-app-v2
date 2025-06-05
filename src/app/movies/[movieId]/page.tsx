type Movie = {
  title: string;
  release_date: string;
  adult: boolean;
  runtime: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
  poster_path: string;
  genres: { id: number; name: string }[];
  overview: string;
  production_companies: { id: number; name: string }[];
};
type SimiliarMovie = {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
};

type MovieResponse = {
  results: SimiliarMovie[];
};
import Navigation from "@/components/HomeComponents/Navigation";
import Footer from "@/components/HomeComponents/Footer";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ArrowRight } from "lucide-react";
import Card from "@/components/HomeComponents/Card";
import { useSecret } from "@/constants";
import { Suspense } from "react";
import Loading from "@/app/movies/[movieId]/loading";
import Link from "next/link";

const Details = async ({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) => {
  const { movieId } = await params;
  const { singleMovieUrl, token, similiarMoviesUrl } = useSecret(movieId);

  const singleMovieResponse = await fetch(singleMovieUrl, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const singleMovie: Movie = await singleMovieResponse.json();

  const similiarMoviesResponse = await fetch(similiarMoviesUrl, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const similiarMovies: MovieResponse = await similiarMoviesResponse.json();

  return (
    <div className="flex flex-col items-center ">
      <Navigation></Navigation>
      <Suspense fallback={<Loading />}>
        <section className="container flex flex-col gap-6">
          <div className="flex justify-between w-full">
            <div>
              <p className=" text-4xl text-[#09090B] font-bold">
                {singleMovie.title}
              </p>
              <div className=" text-lg text-[#09090B] flex gap-0.5">
                <p>{singleMovie.release_date} · </p>
                <p>{singleMovie.adult ? "R" : "PG"} · </p>
                <p>{singleMovie.runtime}m</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[12px] text-[#09090B]">Rating</p>
              <div className="flex items-center gap-1">
                <img src="/images/star.png" alt="star" className="size-7" />
                <div>
                  <div className="flex items-center">
                    <p className="text-[#09090B] text-lg">
                      {Math.floor(singleMovie?.vote_average / 0.1) / 10}
                    </p>
                    <p className=" text-[#71717A] text-[16px]">/10</p>
                  </div>
                  <p className=" text-[12px] text-[#71717A]">
                    {Math.floor(singleMovie?.vote_count / 1000)}k
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <img
              src={`https://image.tmdb.org/t/p/w300${singleMovie.poster_path}`}
              alt={singleMovie.title}
              className="border w-[392px] h-[500px] rounded-sm"
            />
            <img
              src={`https://image.tmdb.org/t/p/original${singleMovie.backdrop_path}`}
              alt={singleMovie.title}
              className="border w-full h-[500px] rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              {singleMovie?.genres?.map((genre) => {
                return (
                  <Badge
                    className="bg-white text-[#09090B] border border-[#E4E4E7] rounded-full font-semibold"
                    key={genre.id}
                  >
                    {genre.name}
                  </Badge>
                );
              })}
            </div>
            <p className="text-[16px] leading-6">{singleMovie.overview}</p>
            <p className="text-[20px] font-bold ">Production Companies</p>
            <div>
              {singleMovie?.production_companies.map((company) => {
                return (
                  <div key={company.id}>
                    <div className="flex gap-[53px]">
                      <p className="text-[16px] font-bold w-16">
                        №{company.id}
                      </p>
                      <p className="text-[16px]">{company.name}</p>
                    </div>
                    <DropdownMenuSeparator className="my-4" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="w-full justify-between flex">
              <p className="text-[#09090B] text-2xl font-semibold">
                More like this
              </p>
              <Link href={"/see_more/similiar"}>
                <button className=" cursor-pointer flex items-center gap-2 px-4 py-2 ">
                  <p>See more</p>
                  <ArrowRight />
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-5 gap-8">
              {similiarMovies?.results?.slice(0, 5).map((movie) => {
                return (
                  <Card
                    key={movie.id}
                    title={movie.title}
                    voteAverage={movie.vote_average}
                    imageUrl={movie.poster_path}
                    id={movie.id}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </Suspense>

      <Footer></Footer>
    </div>
  );
};

export default Details;

// slug
