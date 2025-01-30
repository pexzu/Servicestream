import React, { use, useEffect, useState } from "react";
import * as E from "./TableElement";
import { useMovieDetails } from "../../Utility/Hooks/MovieDetails";

export const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFilterText, setCurrentFilterText] = useState("");
  let response: any = useMovieDetails(currentPage, currentFilterText);
  const totalPages = response.total_pages;
  let currentData = response.data;
  console.log(response);
  //Not using any thirdparty Table component for this coding task

  const onNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const onPrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const onChangeText = (event: any) => {
    setCurrentFilterText(event.target.value);
    if (currentPage != 1) {
      setCurrentPage(1);
    }
  };

  return currentData ? (
    <>
      <E.FilterBox
        placeholder="Please type movie name"
        onChange={(e) => onChangeText(e)}
        value={currentFilterText}
      />
      <E.MovieTable>
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
              <td>{(currentPage - 1) * 10 + (index + 1)}</td>
              <td>{item.Title}</td>
              <td>{item.Year}</td>
              <td>{item.imdbID}</td>
            </tr>
          ))}
        </tbody>
      </E.MovieTable>
      <E.ButtonContainer>
        <E.Button onClick={() => setCurrentPage(1)}> 1</E.Button>
        <E.Button onClick={onPrevClick}> Previous</E.Button>
        <div>Current Page:{currentPage}</div>
        <E.Button onClick={onNextClick}> Next</E.Button>
        <E.Button onClick={() => setCurrentPage(totalPages)}>
          {totalPages}
        </E.Button>
      </E.ButtonContainer>
    </>
  ) : (
    <div>Loader</div>
  );
};
