import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useParams } from "react-router-dom";
import {
  useGetMovieByID,
} from "../hooks/fetch";
import "react-circular-progressbar/dist/styles.css";


export default function MoviePage() {
  const { id } = useParams();
  const { data: movie, isLoading } = useGetMovieByID(id);
  
  return (
    <section>
      {isLoading ? (
        <div> Loading ... </div>
      ) : (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie?.backdrop_path})`,
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full flex justify-center items-center backdrop-brightness-[.2] md:px-20 md:py-28 p-8">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:p-10">
              <div className=" max-w-[100%] md:max-w-[550px] h-[35rem] mb-6 md:mb-0">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  alt="movie-img"
                  className="h-full w-full"
                />
              </div>

              <div className="text-white md:w-[40rem] w-full">
                <h1 className="text-md md:text-lg font-900">{movie?.original_title}</h1>
                <p className="text-xsm md:text-sm font-600">{movie?.tagline}</p>
                <h1 className="text-md md:text-lg font-900 mt-4">Overview</h1>
                <p className=" text-xsm md:text-sm">{movie?.overview}</p>
                <div className="grid grid-cols-2 gap-3 text-center mt-4 mb-4 md:grid-cols-4">
                  <h1 className="text-md md:text-lg font-900 mr-2">Genres:</h1>
                  {movie?.genres?.map((genre) => (
                    <p  key={genre.id}className="bg-[#0e0d0d] py-1 px-4 text-xsm md:text-sm mr-2">
                      {genre?.name}
                    </p>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm md:text-md font-900 mr-2">
                    Runtime:
                    <span className="text-xsm md:text-sm">{movie?.runtime} min</span>
                  </div>
                  <div style={{ width: 80, height: 80, color: "red" }}>
                    <CircularProgressbar
                      value={movie?.vote_average}
                      text={`${movie?.vote_average}%`}
                      styles={buildStyles({
                        textColor: "white",
                        pathColor: "red",
                        trailColor: "white",
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
