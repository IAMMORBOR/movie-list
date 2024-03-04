
export default function MovieCardSkelenton() {
    return (
      <div className="w-[300px] h-[auto] bg-gradient-to-br from-purple-900 80%  via-[#ff2901] 10% to-pink-800 rounded-md pt-2 relative bg-[#131313] animate-pulse border-solid border-[0.1rem] border-[#c5c7d04d] ">
        <div className="absolute top-4 right-[1rem]  cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            color="purple"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
  
        <div className="h-[26rem] w-full bg-[#4c4c4c]">
          <img className="h-full w-full" src='' alt="" />
        </div>
        <div className="py-2 px-2 text-white text-sm  bg-[#4c4c4c] ">
          <p className="w-full h-8 bg-[#4c4c4c] mb-2 border-solid border-[0.1rem] border-[#c5c7d04d]"></p>
          <p className="w-full h-8 bg-[#4c4c4c] mb-2 border-solid border-[0.1rem] border-[#c5c7d04d]"></p>
        </div>
      </div>
    );
  }
  