import { useEffect, useState } from "react";
import { useSearchMovie } from "../hooks/mutate";
import Header from "./Header";
import MovieList from "./MovieList";
import Search from "./SeachMovie";
import { toast } from "react-toastify";

export default function Home() {
  const [searchString, setSearchString] = useState("");
  const [searchData, setSearchData] = useState("");
  const { searchMovie } = useSearchMovie(searchString);

  //handle search
  const handleSearch = async () => {
    try {
      const res = await searchMovie(searchString);
      setSearchData(res);
    } catch (error) {
      toast.error(error || "An error occured");
      console.log(error);
    }
  };

  // submit search function if the enter key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode === 13 && searchString !== "") {
        handleSearch();
      }
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <Header
        setSearchString={setSearchString}
        searchString={searchString}
        handleSearch={handleSearch}
      />
      {!searchData ? (
        <MovieList />
      ) : (
        <Search searchData={searchData} searchString={searchString} />
      )}
    </>
  );
}
