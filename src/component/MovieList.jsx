import MovieCard from "./MovieCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCardSkelenton from "./MovieCardSkelenton";
import {
  useFetchTrendingMovies,
  useFetchPopularMovies,
  useFetchAllSeries,
} from "../hooks/fetch";



export default function MovieList() {
  const navigate = useNavigate();
  const { data: trending, isLoading, isError} = useFetchTrendingMovies();
  const { data: popular, isLoading: loading, isError:error } = useFetchPopularMovies();
  const { data: series, isLoading: loadingSeries, isError:serirsError } = useFetchAllSeries();
 

  const handleRoute = (slug) => {
    navigate(`/${slug}`);
    
  };

  const handleViewMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <section className="bg-[#171717] h-max-content p-4">
      <div className="flex flex-col items-center mb-[1.2rem] md:mb-[2rem]">
        <div className=" text-white flex w-full justify-between items-center md:px-[8rem]">
          <div className=" ">
            <h1 className="text-lg ">What's Trending </h1>
            <div className="bg-gradient-to-br from-red-600 via-pink-800 to-purple-900 border-solid  md:w-[14rem] h-[0.15rem] mb-3"></div>
          </div>
          <button
            className="text-sm cursor-pointer flex justify-end"
            onClick={() => handleRoute("trending")}
          >
            View all
          </button>
        </div>
        <div className="md:flex">
          {trending?.slice(0, 4)?.map((data) => (
            <div className="mb-8 md:mb-2 md:mr-8 mt-4" key={data?.id}>
              {isLoading ? (
                <MovieCardSkelenton />
              ) : (
                <MovieCard
                  title={data.original_name ?? data.original_title}
                  date={data?.release_date ?? data.first_air_date}
                  bgImage={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                  onClick={() => handleViewMovie(data.id)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mb-[1.2rem] md:mb-[2rem]">
        <div className="text-white flex w-full justify-between items-center md:px-[8rem]">
          <div className=" ">
            <h1 className=" text-lg ">Popular Movies?</h1>
            <div className="bg-gradient-to-br from-red-600 via-pink-800 to-purple-900 border-solid md:w-[14rem] h-[0.15rem] mb-3"></div>
          </div>
          <button
            className=" text-xsm md:text-sm cursor-pointer"
            onClick={() => handleRoute("popular-movies")}
          >
            View all
          </button>
        </div>
        <div className="md:flex">
          {popular?.slice(0, 4)?.map((data) => (
            <div className="mb-8 md:mb-2 md:mr-8 mt-4" key={data?.id}>
              {loading ? (
                <MovieCardSkelenton />
              ) : (
                <MovieCard
                  title={data.original_title}
                  date={data?.release_date}
                  bgImage={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                  onClick={() => handleViewMovie(data.id)}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mb-[1.2rem] md:mb-[2rem]">
        <div className="text-white flex w-full justify-between items-center md:px-[8rem]">
          <div className=" ">
            <h1 className="text-lg ">Popular Series</h1>
            <div className="bg-gradient-to-br from-red-600 via-pink-800 to-purple-900 border-solid md:w-[14rem] h-[0.15rem] mb-3"></div>
          </div>
          <button
            className="text-sm cursor-pointer"
            onClick={() => handleRoute("series")}
          >
            View all
          </button>
        </div>
        <div className="md:flex">
          {series?.slice(0, 4)?.map((data) => (
            <div className="mb-8 md:mb-2 md:mr-8 mt-4" key={data?.id}>
              {loadingSeries ? (
                <MovieCardSkelenton />
              ) : (
                <MovieCard
                  title={data.original_name}
                  date={data?.first_air_date}
                  bgImage={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                  onClick={() => handleViewMovie(data.id)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
