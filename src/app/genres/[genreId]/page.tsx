"use client";

import Card from "@/components/HomeComponents/Card";
import Footer from "@/components/HomeComponents/Footer";
import Navigation from "@/components/HomeComponents/Navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Genre, MovieSection } from "@/type";
import Pagination from "@/components/HomeComponents/Pagination";
import { GenreLoader } from "@/components/skeleton";
import { genrePageUrl, token } from "@/constants";
const GenreSearch = () => {
  const params = useParams();
  const genreId = params?.genreId;
  const [page, setPage] = useState(1);
  const { genresUrl, genreMoviesUrl } = genrePageUrl(genreId, page);

  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<MovieSection[]>([]);
  const [bottom, setBottom] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(genresUrl, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setGenres(data.genres || []);
      } catch (err) {
        console.error("Failed to fetch genres", err);
      }
    };

    const fetchGenreMovies = async () => {
      setIsLoading(true);
      if (!genreId) return;
      try {
        const res = await fetch(genreMoviesUrl, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Failed to fetch genre movies", err);
      }
      setIsLoading(false);
    };
    fetchGenreMovies();
    fetchGenres();
  }, [page, genreId]);
  const currentGenre = genres.find(
    (genre: { id: number; name: string }) => genre.id.toString() === genreId
  );

  return (
    <div className="flex flex-col gap-5 items-center w-screen">
      <Navigation></Navigation>

      <section className="container flex flex-col gap-8 text-[#09090B]">
        <p className="text-3xl font-semibold">Search filter</p>
        <div className="flex w-full gap-15">
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

          {isLoading === true ? (
            <GenreLoader></GenreLoader>
          ) : (
            <section className="flex flex-col gap-8">
              <p className="text-[20px] font-semibold">
                Titles in {currentGenre?.name}
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
              <Pagination
                bottom={bottom}
                setBottom={setBottom}
                setPage={setPage}
                page={page}
              ></Pagination>
            </section>
          )}
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default GenreSearch;
