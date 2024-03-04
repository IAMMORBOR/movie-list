import { useQuery } from "react-query";
import axios from "axios";

const apiKey = "ae8775e605fbf2b4a5eda1649df07930";
const baseUrl ="https://api.themoviedb.org/3"

export const useFetchTrendingMovies = () => {
  const fetchAllTrendingMovies = async () => {
    const data = await axios.get(
      `${baseUrl}/trending/all/day`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTg3NzVlNjA1ZmJmMmI0YTVlZGExNjQ5ZGYwNzkzMCIsInN1YiI6IjY1ZTViZmVkYTA1NWVmMDE2MzExZmZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lu3nYA3JEGj-tkWLB7FL5p1o4sdjEL2_PhIcVAGBdR8",
        },
      }
    );
    return data?.data?.results;
  };

  const getAllTrendingMovies = useQuery(
    ["fetch-all-Trending-Movies", { apiKey }],
    () => fetchAllTrendingMovies({ apiKey }),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
  return getAllTrendingMovies;
};

// popular movies 
export const useFetchPopularMovies = () => {
    const fetchAllPopularMovies = async () => {
      const data = await axios.get(
        `${baseUrl}/movie/popular`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTg3NzVlNjA1ZmJmMmI0YTVlZGExNjQ5ZGYwNzkzMCIsInN1YiI6IjY1ZTViZmVkYTA1NWVmMDE2MzExZmZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lu3nYA3JEGj-tkWLB7FL5p1o4sdjEL2_PhIcVAGBdR8",
          },
        }
      );
      return data?.data?.results;
    };
    const getAllPopularMovies = useQuery(
      ["fetch-all-popular-movies", { apiKey }],
      () => fetchAllPopularMovies({ apiKey }),
      {
        enabled: true,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
      }
    );
    return getAllPopularMovies;
  };

  //series
  export const useFetchAllSeries = () => {
    const fetchAllPopularSeries = async () => {
      const data = await axios.get(
        `${baseUrl}/tv/popular`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTg3NzVlNjA1ZmJmMmI0YTVlZGExNjQ5ZGYwNzkzMCIsInN1YiI6IjY1ZTViZmVkYTA1NWVmMDE2MzExZmZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lu3nYA3JEGj-tkWLB7FL5p1o4sdjEL2_PhIcVAGBdR8",
          },
        }
      );
      return data?.data?.results;
    };
  
    const getAllPopularSeries = useQuery(
      ["fetch-all-series"],
      () => fetchAllPopularSeries(),
      {
        enabled: true,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
      }
    );
    return getAllPopularSeries;
  };

export const useGetMovieByID = (id) => {
    const fetchMovieByID = async (id) => {
      const data = await axios.get(
        `${baseUrl}/movie/${id}?api_key=${apiKey}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTg3NzVlNjA1ZmJmMmI0YTVlZGExNjQ5ZGYwNzkzMCIsInN1YiI6IjY1ZTViZmVkYTA1NWVmMDE2MzExZmZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lu3nYA3JEGj-tkWLB7FL5p1o4sdjEL2_PhIcVAGBdR8",
          },
        }
      );
    
      return data?.data;
    };
  
    const getMovieByID = useQuery(
      ["fetch-all-series",{id, apiKey}],
      () => fetchMovieByID(id),
      {
        enabled: true,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
      }
    );
    return getMovieByID;
  };