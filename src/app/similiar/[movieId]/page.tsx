"use client";
import Card from "@/components/HomeComponents/Card";
import Footer from "@/components/HomeComponents/Footer";
import Navigation from "@/components/HomeComponents/Navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "next/navigation";
import { MovieResponse } from "@/type";
const Similiar = () => {
  const params = useParams();
  const id = params.movieId;

  const [bottom, setBottom] = useState(0);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<MovieResponse>();
  const handlePrevious = () => {
    if (page !== 1) {
      if (bottom === 0) {
        setBottom(10);
        setPage(page - 1);
      } else {
        setBottom(bottom - 10);
      }
    } else if (bottom === 10) setBottom(0);
  };
  const handleNext = () => {
    if (bottom === 10) {
      setPage(page + 1);
      setBottom(0);
    } else setBottom(bottom + 10);
  };

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
      <div className="flex flex-col items-center">
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
        <div className="flex justify-end px-5 container gap-2">
          <button
            className="px-4 py-2 gap-2 cursor-pointer"
            onClick={() => {
              handlePrevious();
            }}
          >
            Previous
          </button>
          <button
            className="p-2.5 cursor-pointer"
            onClick={() => {
              setBottom(0);
            }}
          >
            1
          </button>
          <button
            className="p-2.5 cursor-pointer"
            onClick={() => {
              setBottom(10);
            }}
          >
            2
          </button>
          <button
            className="px-4 py-2 gap-2 cursor-pointer"
            onClick={() => {
              handleNext();
            }}
          >
            Next
          </button>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Similiar;
