import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

export default function MovieList() {
    const navigate = useNavigate()
    const handleRoute = (slug)=>{
        navigate(`/${slug}`)
        console.log(slug)
    }
  return (
    <section className="bg-[#171717] h-max-content p-4 ">
      <div className="flex flex-col items-center">
        <div className="flex justify-between items-center text-white">
          <div className=" ">
            <h1 className="text-lg ">What's Trending ?</h1>
            <div className="bg-gradient-to-br from-red-600 via-pink-800 to-purple-900 border-solid  md:w-[18rem] h-[0.15rem] mb-3"></div>
          </div>
          <button className="text-sm cursor-pointer" onClick={()=>handleRoute("trending")}>View All</button>
        </div>
        <div className="md:flex md:gap-2">
          <MovieCard title="Movie Title"  date='Movie Date'/>
          <MovieCard date='Movie Date' />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-between items-center text-white">
          <div className=" ">
            <h1 className=" text-sm md:text-lg ">Popular Movies?</h1>
            <div className="bg-gradient-to-br from-red-600 via-pink-800 to-purple-900 border-solid md:w-[18rem] h-[0.15rem] mb-3"></div>
          </div>
          <button className=" text-xsm md:text-sm cursor-pointer" onClick={()=>handleRoute("popular-movies")}>View All</button>
        </div>
        <div className="md:flex md:gap-2">
          <MovieCard />
       
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-between items-center text-white">
          <div className=" ">
            <h1 className="text-lg ">Popular Series</h1>
            <div className="bg-gradient-to-br from-red-600 via-pink-800 to-purple-900 border-solid md:w-[18rem] h-[0.15rem] mb-3"></div>
          </div>
          <button className="text-sm cursor-pointer" onClick={()=>handleRoute("series")}>View All</button>
        </div>
        <div className="md:flex md:gap-2">
          <MovieCard />
        </div>
      </div>
    </section>
  );
}
