import { useState, useEffect } from "react";
import axios from "axios";

export const useMovieDetails = (pageNumber: number) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const movieDetails = async () => {
      try {
        console.log("blash");
        let result = await axios(
          `https://jsonmock.hackerrank.com/api/movies/search/?page=${pageNumber}`
        );
        setMovieData(result.data);
      } catch (err) {
        console.log("err");
      } finally {
        // setLoading(false)
      }
    };
    movieDetails();
  }, [pageNumber]);

  return movieData;
};
