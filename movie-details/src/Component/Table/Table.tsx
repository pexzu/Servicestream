import React, { use, useEffect, useState } from "react";
import * as E from "./TableElement";
import { useMovieDetails } from "../../Utility/Hooks/MovieDetails";

export const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFilterText, setCurrentFilterText] = useState("");
  const [rowActive, setRowActive] = useState(-1);

  let response: any = useMovieDetails(currentPage, currentFilterText);
  const totalPages = response.total_pages;
  let currentData = response.data;
  //Not using any thirdparty Table component for this coding task

  const onNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setRowActive(-1);
    }
  };
  const onPrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setRowActive(-1);
    }
  };
  const onChangeText = (event: any) => {
    setCurrentFilterText(event.target.value);
    if (currentPage != 1) {
      setCurrentPage(1);
      setRowActive(-1);
    }
  };
  const onRowclick = (id: number) => {
    console.log(id);
    setRowActive(id);
  };

  return currentData ? (
    <>
      <E.FilterBox
        placeholder="Search Movies"
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
            <E.MovieTableRow
              onClick={() => onRowclick(index)}
              Highlight={index == rowActive}
            >
              <td>{(currentPage - 1) * 10 + (index + 1)}</td>
              <td>{item.Title}</td>
              <td>{item.Year}</td>
              <td>{item.imdbID}</td>
            </E.MovieTableRow>
          ))}
        </tbody>
      </E.MovieTable>
      <E.ButtonContainer>
        <E.Button onClick={() => [setCurrentPage(1), setRowActive(-1)]}>
          1
        </E.Button>
        {"< <"}
        <E.Button onClick={onPrevClick}> Previous</E.Button>
        <div>Current Page:{currentPage}</div>
        <E.Button onClick={onNextClick}> Next</E.Button>
        {"> >"}
        <E.Button
          onClick={() => [setCurrentPage(totalPages), setRowActive(-1)]}
        >
          {totalPages}
        </E.Button>
      </E.ButtonContainer>
    </>
  ) : (
    <div>Loader</div>
  );
};
