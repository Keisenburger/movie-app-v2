"use client";
// type Movie = {
//   title: string;
//   release_date: string;
//   adult: boolean;
//   runtime: string;
//   vote_average: number;
//   vote_count: number;
//   backdrop_path: string;
//   poster_path: string;
//   genres: { id: number; name: string }[];
//   overview: string;
//   production_companies: { id: number; name: string }[];
// };
type Movie2 = {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  release_date: string;
};

type MovieResponse = {
  results: Movie2[];
};
import {
  Moon,
  ChevronDown,
  ChevronRight,
  Search,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
const Navigation = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`;
  const genresUrl = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";
  const [genresData, setGenresData] = useState([]);
  const [searchData, setSearchData] = useState<MovieResponse>({ results: [] });
  useEffect(() => {
    fetchSearchData();
  }, [searchValue]);
  useEffect(() => {
    fetchGenreData();
  }, []);

  const fetchGenreData = () => {
    fetch(genresUrl, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.json())
      .then((data) => setGenresData(data.genres));
  };
  const fetchSearchData = () => {
    fetch(searchUrl, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.json())
      .then((data) => setSearchData(data));
  };

  const isResultThere = () => {
    if (searchValue && searchData.results.length === 0) {
      return true;
    } else false;
  };
  return (
    <div className="h-[60px] flex justify-between items-center container px-5">
      <Link href={"/"}>
        <div className="flex  gap-2 items-center">
          <img src="/images/film.png" alt="logo" className=" w-5 h-5 " />
          <p className=" text-[16px] text-indigo-700 font-bold italic">
            Movie Z
          </p>
        </div>
      </Link>
      <div className="flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-white text-black hover:bg-white border-[#E4E4E7] border">
              <ChevronDown />
              Genre
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-5 w-[577px]">
            <DropdownMenuLabel className=" gap-1 flex flex-col">
              <p className="text-2xl font-semibold">Genres</p>
              <p className="text-[16px]">See lists of movies by genre</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="my-4" />
            <DropdownMenuGroup className="flex gap-4 flex-wrap w-full">
              {genresData?.map(({ id, name }) => {
                return (
                  <Link href={`/genres/${id}`} key={id}>
                    <DropdownMenuItem
                      className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit rounded-full font-semibold"
                      key={id}
                    >
                      {name}
                      <ChevronRight />
                    </DropdownMenuItem>
                  </Link>
                );
              })}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-2.5 border px-3 rounded-md border-[#E4E4E7] relative">
          <Search color="gray" />
          <input
            type="text"
            placeholder="Search...."
            className=" focus:outline-0"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          {searchValue && (
            <div className="absolute top-10 w-[577px] left-[-200px] h-fit border p-3 flex flex-col z-10 bg-white">
              {searchData &&
                searchData?.results?.slice(0, 5).map((movie) => {
                  return (
                    <div className="p-2 flex gap-4 w-full" key={movie.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt=""
                        className="h-full w-[67px] border "
                      />
                      <div className="flex flex-col gap-3 w-full">
                        <div>
                          <p className="font-semibold text-xl">{movie.title}</p>
                          <div className="flex gap-1 items-center">
                            <img
                              src="/images/star.png"
                              alt="star"
                              className="size-4"
                            />
                            <p className="text-[#09090B]">
                              {Math.floor(movie.vote_average / 0.1) / 10}
                              <span className="text-[#71717A] text-[12px]">
                                /10
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between w-full  items-center">
                          <p className="h-full">{movie.release_date}</p>
                          <Link href={`/movies/${movie.id}`}>
                            <button className="flex gap-2 cursor-pointer px-4 py-2 rounded-sm">
                              <p>See more</p>
                              <ArrowRight></ArrowRight>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {isResultThere() && (
                <div className="flex justify-center">
                  <ClipLoader></ClipLoader>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <button className="border cursor-pointer border-[#E4E4E7] h-9 w-9 rounded-md flex justify-center items-center">
        <Moon size={20} strokeWidth={2} />
      </button>
    </div>
  );
};

export default Navigation;
