import React, { use, useEffect, useState } from "react";
import * as E from "./TableElement";
import { useMovieDetails } from "../../Utility/Hooks/MovieDetails";

export const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);

  let response: any = useMovieDetails(currentPage);
  const totalPages = response.total_pages;
  let currentData = response.data;
  console.log(response);
  //Not using any thirdparty Table component for this coding task
  return (
    currentData && (
      <>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Movie Name</th>
              <th>Year</th>
              <th>IMBD ID</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item: any, index: number) => (
              <tr>
                <td>{index}</td>
                <td>{item.Title}</td>
                <td>{item.Year}</td>
                <td>{item.imdbID}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <E.ButtonContainer>
          <E.Button> 1</E.Button>
          <E.Button> Previous</E.Button>
          <div>Current Page:{currentPage}</div>
          <E.Button> Next</E.Button>
          <E.Button> {totalPages}</E.Button>
        </E.ButtonContainer>
      </>
    )
  );
};
