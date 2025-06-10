export const movieDetailUrl = (id: string) => {
  return {
    singleMovieUrl: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    similiarMoviesUrl: `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    actorsUrl: `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
  };
};

export const navigationUrl = (searchValue: string) => {
  return {
    searchUrl: `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=1`,
    genresUrl: "https://api.themoviedb.org/3/genre/movie/list?language=en",
  };
};

export const genrePageUrl = (genreId: unknown, page: number) => {
  return {
    genresUrl: "https://api.themoviedb.org/3/genre/movie/list?language=en",
    genreMoviesUrl: `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}&page=${page}`,
  };
};

export const similiarPageUrl = (id: unknown, page: number) => {
  return {
    similiarMovieUrl: ` https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=${page}`,
  };
};
export const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";
