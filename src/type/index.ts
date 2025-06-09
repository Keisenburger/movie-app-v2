export type MovieDetails = {
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
export type MovieSection = {
  slice(bottom: number, arg1: number): unknown;
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  release_date: string;
};

export type MovieResponse = {
  results: MovieSection[];
};

export type Genre = {
  id: number;
  name: string;
};

export type PaginationType = {
  bottom: number;
  setBottom: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};
