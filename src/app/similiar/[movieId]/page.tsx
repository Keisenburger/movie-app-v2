"use client";

import Card from "@/components/HomeComponents/Card";
import Footer from "@/components/HomeComponents/Footer";
import Navigation from "@/components/HomeComponents/Navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "next/navigation";
import Pagination from "@/components/HomeComponents/Pagination";
import { SimiliarMovie } from "@/type";
import { similiarPageUrl, token } from "@/constants";
const Similiar = () => {
  const params = useParams();
  const id = params.SimiliarMovieId;

  const [bottom, setBottom] = useState(0);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<SimiliarMovie[]>();
  const { similiarMovieUrl } = similiarPageUrl(id, page);
  const fetchMovies = () => {
    fetch(similiarMovieUrl, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };
  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div>
      <div className="flex flex-col items-center gap-8 justify-center">
        <Navigation></Navigation>
        <div className="container flex flex-col gap-5 ">
          <p className="text-3xl font-semibold">More Like This</p>
          <div className=" grid sm:grid-cols-3 grid-cols-2 xl:grid-cols-5 md:grid-cols-4 auto-rows-auto gap-8">
            {movies?.slice(bottom, bottom + 10).map((movie) => {
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
            })}
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
