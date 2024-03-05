import backgroundImage from "../assets/batman.jpg";


export default function Header({setSearchString, searchString, handleSearch}) {

  return (
    <section className="">
      <div className=""
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "400px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full flex justify-center items-center backdrop-brightness-[.2] ">
          <div className="text-center">
            <h1 className="text-white text-4xl text-center capitalize text-xl font-[900] mb-3">
              Welcome !
            </h1>
            <h3 className="font-400 text-white text-lg mb-8">
              Discover and explore recent and trending movies & TV shows
            </h3>
            <div className="h-[4rem] bg-gradient-to-br from-red-600 via-pink-800 to-purple-900 rounded-full flex justify-start items-center p-2 md:w-[60rem]">
              <input className="h-[100%] w-[70%] text-start rounded-full outline-none border-none md:w-[80%] text-md p-2 pl-6" type="text" placeholder="Search ..."  onChange={(e)=>setSearchString(e.target.value)}/>
              <button className="text-sm text-white ml-2 md:ml-6 md:text-md cursor-pointer" onClick={handleSearch} disabled={!searchString} >Show Me !</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
