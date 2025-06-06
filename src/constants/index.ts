export const useSecret = (id: string) => {
  return {
    singleMovieUrl: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    similiarMoviesUrl: `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    actorsUrl: `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    token:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8",
  };
};
