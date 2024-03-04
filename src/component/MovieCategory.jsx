import { useParams } from 'react-router-dom';
import MovieCard from "./MovieCard";
import MovieCardSkelenton from "./MovieCardSkelenton";
import {
  useFetchTrendingMovies,
  useFetchPopularMovies,
  useFetchAllSeries,
} from "../hooks/fetch";

export default function Category(){
    const { category } = useParams();
    const { data: trending, isLoading } = useFetchTrendingMovies();
  const { data: popular, isLoading: loading } = useFetchPopularMovies();
  const { data: series, isLoading: loadingSeries } = useFetchAllSeries();

    return(
        <section className="bg-[#171717] h-max-content p-4">
            <div className="text-white flex justify-center items-center">
            {category === "trending" &&
               <div className="md:grid md:grid-cols-4 md:gap-4">
               {trending?.map((data, id) => (
                 <div className="mb-8 md:mb-2 md:mr-8 mt-4">
                   {isLoading ? (
                     <MovieCardSkelenton />
                   ) : (
                     <MovieCard
                       key={id}
                       title={data.original_name ?? data.original_title}
                       date={data?.release_date ?? data.first_air_date}
                       bgImage={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                     />
                   )}
                 </div>
               ))}
             </div>
            
            }
            </div>
            <div className="text-white flex justify-center items-center">
            {category === "popular-movies" &&
               <div className="md:grid md:grid-cols-4 md:gap-4">
               {popular?.map((data, id) => (
                 <div className="mb-8 md:mb-2 md:mr-8 mt-4">
                   {loading ? (
                     <MovieCardSkelenton />
                   ) : (
                     <MovieCard
                       key={id}
                       title={data.original_name ?? data.original_title}
                       date={data?.release_date ?? data.first_air_date}
                       bgImage={`https://image.tmdb.org/t/p/w500/${data?.poster_path ?? data?.backdrop_path}`}
                       
                     />
                   )}
                 </div>
               ))}
             </div>
            
            }
            </div>
            <div className="text-white flex justify-center items-center">
            {category === "series" &&
               <div className="md:grid md:grid-cols-4 md:gap-4">
               {series?.map((data, id) => (
                 <div className="mb-8 md:mb-2 md:mr-8 mt-4">
                   {loadingSeries ? (
                     <MovieCardSkelenton />
                   ) : (
                     <MovieCard
                       key={id}
                       title={data.original_name ?? data.original_title}
                       date={data?.release_date ?? data.first_air_date}
                       bgImage={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                     />
                   )}
                 </div>
               ))}
             </div>
            
            }
            </div>
        </section>
    )
}