import movies from "../db/movies.json" with { type: "json" };

interface Movie {
  title: string;
  id: string;
  src: string;
}

interface getMoviesProps {
  limit?: number;
  offset?: number;
}

export const getMovies = async (
  { limit = 100, offset = 0 }: getMoviesProps,
): Promise<Movie[]> => {
  return Promise.resolve(movies.slice(offset, offset + limit));
};
