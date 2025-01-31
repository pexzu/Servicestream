import styled from "@emotion/styled";
import { ReactComponent as UpArrow } from "./../../Icons/arrow_drop_up.svg";

export const Button = styled.button`
  label: Button;
  padding: 6px 12px;
  background-color: lightgreen;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid black;
  color: black;
  margin: 0 9px;
  cursor: pointer;
  &:hover {
    color: hotpink;
  }
`;

export const ButtonContainer = styled.div`
  label: ButtonContainer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
`;

export const MovieTable = styled.table`
  label: MovieTable;
  border: 1px solid;
  width: 100%;
  > thead {
    color: purple;
    text-align: left;
  }
  > tbody {
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    tr {
      &:hover {
        background-color: #ddd;
      }
      td {
        padding: 6px;
        min-width: 10%;
      }
      td:nth-child(2) {
        width: 70%;
      }
    }
  }
`;

interface IMovieTableRowProps {
  Highlight: boolean;
}

export const MovieTableRow = styled.tr<IMovieTableRowProps>`
  label: MovieTableRow;
  cursor: pointer;
  background: ${(props: IMovieTableRowProps) =>
    props.Highlight && "pink"} !important;
`;

export const FilterBox = styled.input`
  label: FilterBox;
  padding: 6px 9px;
  margin: 0 0 15px;
`;

interface IUpArrowIconProps {
  SortAsc: boolean;
}
export const UpArrowIcon = styled(UpArrow)<IUpArrowIconProps>`
  label: UpArrowIcon;
  vertical-align:middle;
  transform: ${(props: IUpArrowIconProps) =>
    props.SortAsc ? "rotate(180deg)" : "rotate(0)"}}
`;
