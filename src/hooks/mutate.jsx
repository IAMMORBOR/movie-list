import axios from "axios";
import { useMutation } from "react-query";

const apiKey = "ae8775e605fbf2b4a5eda1649df07930";
const baseUrl = "https://api.themoviedb.org/3";
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTg3NzVlNjA1ZmJmMmI0YTVlZGExNjQ5ZGYwNzkzMCIsInN1YiI6IjY1ZTViZmVkYTA1NWVmMDE2MzExZmZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lu3nYA3JEGj-tkWLB7FL5p1o4sdjEL2_PhIcVAGBdR8";

export const useSearchMovie = (searchString) => {
  const searchMovies = async (searchString) => {
    try {
      const data = await axios.get(
        `${baseUrl}/search/multi?query=${searchString}`,
        {
          headers: {
            accept: "application/json",
            Authorization: token,
          },
        }
      );
      return data.data.results;
    } catch (error) {
      throw error;
    }
  };

  const { mutateAsync: searchMovie } = useMutation({
    mutationFn: searchMovies,
    enabled: false,
    onSuccess: (data) => {
    //   console.log(data);
    },
  });
  return { searchMovie };
};
