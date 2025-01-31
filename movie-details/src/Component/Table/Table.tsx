import React, { use, useEffect, useState } from "react";
import * as E from "./TableElement";
import { useMovieDetails } from "../../Utility/Hooks/MovieDetails";

export const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFilterText, setCurrentFilterText] = useState("");
  const [rowActive, setRowActive] = useState("");
  const [sortAsc, setSortAsc] = useState(false);

  let response = useMovieDetails(currentPage, currentFilterText);
  const totalPages = response.total_pages;
  let currentData = response.data;

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

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentFilterText(event.target.value);
    if (currentPage != 1) {
      setCurrentPage(1);
    }
  };

  const onRowclick = (id: string) => {
    setRowActive(id);
  };

  const sortMovie = () => {
    if (sortAsc) {
      currentData = currentData.sort((a, b) => {
        if (a.Title > b.Title) {
          return -1;
        }
        if (a.Title < b.Title) {
          return 1;
        }
        return 0;
      });
      setSortAsc(false);
    } else {
      currentData = currentData.sort((a, b) => {
        if (a.Title < b.Title) {
          return -1;
        }
        if (a.Title > b.Title) {
          return 1;
        }
        return 0;
      });
      setSortAsc(true);
    }
  };

  //Not using any thirdparty Table component for this coding task
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
            <th onClick={sortMovie}>
              Movie Name
              <E.UpArrowIcon Asc={sortAsc} />
            </th>
            <th>Year</th>
            <th>IMBD ID</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index: number) => (
            <E.MovieTableRow
              onClick={() => onRowclick(item.imdbID)}
              Highlight={item.imdbID == rowActive}
              key={index + item.Title}
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
        <E.Button onClick={() => setCurrentPage(1)}>1</E.Button>
        {"<"}
        <E.Button onClick={onPrevClick}> Previous</E.Button>
        <div>Current Page:{currentPage}</div>
        <E.Button onClick={onNextClick}> Next</E.Button>
        {">"}
        <E.Button onClick={() => setCurrentPage(totalPages)}>
          {totalPages}
        </E.Button>
      </E.ButtonContainer>
    </>
  ) : (
    <div>Loader</div>
  );
};
