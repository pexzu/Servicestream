import { useState, useEffect } from "react";
import axios from "axios";
interface IMovieDataType {
  data: [{ Title: string; Year: number; imdbID: string }];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
export const useMovieDetails = (
  pageNumber: number,
  currentFilterText: string
): IMovieDataType => {
  const [movieData, setMovieData] = useState<IMovieDataType>({
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data: [
      {
        Title: "",
        Year: 0,
        imdbID: "",
      },
    ],
  });

  useEffect(() => {
    const movieDetails = async () => {
      try {
        console.log("blash");
        let result = await axios(
          `https://jsonmock.hackerrank.com/api/movies/search/?page=${pageNumber}`,
          {
            params: {
              Title: currentFilterText,
            },
          }
        );
        setMovieData(result.data);
      } catch (err) {
        console.log("err");
      } finally {
        // setLoading(false)
      }
    };
    movieDetails();
  }, [pageNumber, currentFilterText]);

  return movieData;
};
