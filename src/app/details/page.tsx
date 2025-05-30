"use client";
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

import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ArrowRight } from "lucide-react";
import Card from "@/components/HomeComponents/Card";

const Details = () => {
  const id = 96;
  const [singleMovie, setSingleMovie] = useState<Movie>({});
  const [similiarMovies, setSimiliarMovies] = useState<MovieResponse>({
    results: [],
  });
  const singleMovieUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const similiarMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";
  useEffect(() => {
    fetchSingleMoviesingleMovie();
    fetchSimiliarMoviesingleMovie();
  }, []);
  const fetchSingleMoviesingleMovie = () => {
    fetch(singleMovieUrl, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.json())
      .then((data) => setSingleMovie(data));
  };
  const fetchSimiliarMoviesingleMovie = () => {
    fetch(similiarMoviesUrl, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.json())
      .then((data) => setSimiliarMovies(data));
  };

  return (
    <div className="flex flex-col items-center ">
      <Navigation></Navigation>
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
            className="border w-[392px] h-[500px]"
          />
          <img
            src={`https://image.tmdb.org/t/p/original${singleMovie.backdrop_path}`}
            alt=""
            className="border w-full h-[500px]"
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
          <div>
            <div className="flex gap-[53px]">
              <p className="text-[16px] font-bold w-16">Director</p>
              <p className="text-[16px]">Jon M. Chu</p>
            </div>
            <DropdownMenuSeparator className="my-4" />
            <div className="flex gap-[53px]">
              <p className="text-[16px] font-bold w-16">Writers</p>
              <p className="text-[16px]">
                Winnie Holzman · Dana Fox · Gregory Maguire
              </p>
            </div>
            <DropdownMenuSeparator className="my-4" />
            <div className="flex gap-[53px]">
              <p className="text-[16px] font-bold w-16">Stars</p>
              <p className="text-[16px]">
                Cynthia Erivo · Ariana Grande · Jeff Goldblum
              </p>
            </div>
            <DropdownMenuSeparator className="my-4" />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-full justify-between flex">
            <p className="text-[#09090B] text-2xl font-semibold">
              More like this
            </p>
            <button className=" cursor-pointer flex items-center gap-2 px-4 py-2 ">
              <p>See more</p>
              <ArrowRight />
            </button>
          </div>
          <div className="grid grid-cols-5 gap-8">
            {similiarMovies?.results?.slice(0, 5).map((movie) => {
              return (
                <Card
                  key={movie.id}
                  title={movie.title}
                  voteAverage={movie.vote_average}
                  imageUrl={movie.poster_path}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Details;
