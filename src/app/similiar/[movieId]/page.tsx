"use client";
type Movie = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
};
import Card from "@/components/HomeComponents/Card";
import Footer from "@/components/HomeComponents/Footer";
import Navigation from "@/components/HomeComponents/Navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "next/navigation";
import { MovieResponse } from "@/type";
import Pagination from "@/components/HomeComponents/Pagination";
const Similiar = () => {
  const params = useParams();
  const id = params.movieId;

  const [bottom, setBottom] = useState(0);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>();

  const url = ` https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=${page}`;
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";
  const fetchMovies = () => {
    fetch(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div>
      <div className="flex flex-col items-center gap-8">
        <Navigation></Navigation>
        <div className="container flex flex-col gap-5 ">
          <p className="text-3xl font-semibold">More Like This</p>
          <div className=" grid sm:grid-cols-3 grid-cols-2 xl:grid-cols-5 md:grid-cols-4 auto-rows-auto gap-8">
            {movies
              ?.slice(bottom, bottom + 10)
              .map(
                (movie: {
                  id: number;
                  title: string;
                  vote_average: number;
                  poster_path: string;
                }) => {
                  {
                    return (
                      <Card
                        key={movie.id}
                        title={movie.title}
                        voteAverage={movie.vote_average}
                        imageUrl={movie.poster_path}
                        id={movie.id}
                      />
                    );
                  }
                }
              )}
          </div>
        </div>
        <Pagination
          bottom={bottom}
          setBottom={setBottom}
          setPage={setPage}
          page={page}
        ></Pagination>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Similiar;
