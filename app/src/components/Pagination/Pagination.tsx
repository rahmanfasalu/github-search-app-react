import React from "react";
import styled from "styled-components";
import Theme from "../../theme/theme";

interface PaginationType {
  total: number;
  perPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface PageNumberProps {
  active?: boolean;
}

function Pagination({
  total,
  perPage,
  currentPage,
  setCurrentPage,
}: PaginationType): JSX.Element {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div></div>
      <PaginationContainer>
        {pageNumbers &&
          pageNumbers.length > 1 &&
          pageNumbers.map(
            (num: number): JSX.Element => {
              return (
                <PageNumber
                  key={num}
                  active={currentPage === num}
                  onClick={() => setCurrentPage(num)}
                >
                  {num}
                </PageNumber>
              );
            }
          )}
      </PaginationContainer>
    </>
  );
}

const PaginationContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 65px;
  flex-wrap: wrap;
`;

const PageNumber = styled.li<PageNumberProps>`
  color: ${Theme.colors.white};
  margin: 2px;
  color: #fff;
  border-radius: 10px;
  padding: 10px;
  min-width: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  background: ${({ active }) => {
    return active ? Theme.colors.secondary : Theme.colors.primary;
  }};
  &:hover {
    background: ${Theme.colors.secondary};
  }
`;

export default Pagination;
