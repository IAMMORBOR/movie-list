
export default function MovieCard({ title, date, bgImage, onClick }) {
  return (
    <div className="w-[300px] h-[auto] bg-gradient-to-br from-purple-900 80%  via-[#ff2901] 10% to-pink-800 rounded-md pt-2 relative ">
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

      <div className="h-[26rem] w-full">
        <img className="h-full w-full" src={bgImage} alt="" />
      </div>
      <div
        className="py-2 px-2 text-white text-sm cursor-pointer"
        onClick={onClick ? () => onClick() : null}
      >
        <p>{title}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
