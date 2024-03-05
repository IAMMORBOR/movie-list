import MovieCard from "./MovieCard";
import MovieCardSkelenton from "./MovieCardSkelenton";

export default function Search({ searchData, isLoading, searchString }) {
  return (
    <div className="flex flex-col items-center mb-[1.2rem] md:mb-[4rem] mt-5">
      <div className="text-white flex w-full justify-between items-center md:px-[12rem]">
        <div className=" ">
          <h1 className=" text-lg ">{`Result for ${searchString}`}</h1>
          <div className="bg-gradient-to-br from-red-600 via-pink-800 to-purple-900 border-solid md:w-[18rem] h-[0.15rem] mb-3"></div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-4 md:gap-1">
        {searchData?.map((data) => (
          <div className="mb-8 md:mb-2 md:mr-8 mt-4" key={data.id}>
            {isLoading ? (
              <MovieCardSkelenton />
            ) : (
              <MovieCard
                title={data.original_name ?? data.original_title}
                date={data?.release_date ?? data.first_air_date}
                bgImage={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
