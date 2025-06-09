"use client";

import Card from "@/components/HomeComponents/Card";
import Footer from "@/components/HomeComponents/Footer";
import Navigation from "@/components/HomeComponents/Navigation";
import { SelectSeparator } from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { Genre, MovieSection } from "@/type";
const GenreSearch = () => {
  const params = useParams();
  const genreId = params?.genreId;

  const [page, setPage] = useState(1);

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<MovieSection[]>([]);
  const [bottom, setBottom] = useState(0);
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
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=en",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();
        setGenres(data.genres || []);
      } catch (err) {
        console.error("Failed to fetch genres", err);
      }
    };

    const fetchGenreMovies = async () => {
      if (!genreId) return;
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}&page=${page}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Failed to fetch genre movies", err);
      }
    };
    fetchGenreMovies();
    fetchGenres();
  }, [page, genreId]);
  const currentGenre = genres.find(
    (genre: { id: number; name: string }) => genre.id.toString() === genreId
  );
  console.log(currentGenre);

  return (
    <div className="flex flex-col gap-5 items-center w-screen">
      <Navigation></Navigation>
      <section className="container flex flex-col gap-8 text-[#09090B]">
        <p className="text-3xl font-semibold">Search filter</p>
        <div className="flex w-full gap-8">
          <section className="flex flex-col gap-5 w-1/2">
            <div>
              <p className="text-2xl font-semibold">Genres</p>
              <p className="text-[16px]">See lists of movies by genre</p>
            </div>
            <div className="flex  flex-wrap gap-4">
              {genres.map((genre) => {
                return (
                  <Link href={`/genres/${genre.id}`} key={genre.id}>
                    <div className="bg-white text-black flex border  h-4 items-center pl-2.5 py-3 gap-2 rounded-full">
                      <p>{genre.name}</p>
                      <ChevronRight size={16}></ChevronRight>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
          <SelectSeparator></SelectSeparator>
          <section className="flex flex-col gap-8">
            <p className="text-[20px] font-semibold">
              Titles in "{currentGenre?.name}"
            </p>
            <div className=" grid sm:grid-cols-3 grid-cols-2  md:grid-cols-4 auto-rows-auto gap-8">
              {movies.slice(bottom, bottom + 10).map((movie) => {
                return (
                  <Card
                    key={movie.id}
                    title={movie.title}
                    voteAverage={movie.vote_average}
                    imageUrl={movie.poster_path}
                    id={movie.id}
                  ></Card>
                );
              })}
            </div>
            <div className="flex justify-end px-5 container gap-2">
              <button
                className="px-4 py-2 gap-2 cursor-pointer flex items-center"
                onClick={() => {
                  handlePrevious();
                }}
              >
                <ChevronLeft></ChevronLeft>
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
                className="px-4 py-2 gap-2 cursor-pointer flex items-center"
                onClick={() => {
                  handleNext();
                }}
              >
                Next
                <ChevronRight></ChevronRight>
              </button>
            </div>
          </section>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default GenreSearch;
