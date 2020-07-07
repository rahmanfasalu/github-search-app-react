import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../../theme/theme";

function SearchBox({
  setQuery,
}: {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  const [activeClass, setActiveClass] = useState("active");
  const [animateClass, setAnimateClass] = useState("animate");
  const [value, setValue] = useState("");
  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        placeholder="Enter for search"
        className={`input ${activeClass}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => (e.keyCode === 13 ? setQuery(value) : "")}
      />
      <SearchButton
        className={`btn ${animateClass}`}
        onClick={(event: React.MouseEvent) => {
          if (activeClass) {
            setAnimateClass("");
            setActiveClass("");
            setValue("");
          } else {
            setAnimateClass("animate");
            setActiveClass("active");
          }
        }}
      >
        <i className="fa fa-search" aria-hidden="true"></i>
      </SearchButton>
      <P>(Enter For Search)</P>
    </SearchWrapper>
  );
}

const P = styled.p`
  margin: 0;
  position: absolute;
  bottom: 0;
  color: #d3d3d3;
`;
const SearchWrapper = styled.div`
  position: relative;
  width: 320px;
  margin: 0 auto;
  display: block;
  height: 68px;
  margin-top: 12px;
`;

const SearchButton = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  right: 45px;
  top: 0;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  transition: all 0.8s ease;
  border: 1px solid #fff;
  color: ${Theme.colors.white};
  background: ${Theme.colors.primary};
  &.animate {
    transform: rotate(-360deg);
    right: 100px;
  }
`;

const SearchInput = styled.input`
  position: absolute;
  top: 10px;
  right: 50px;
  box-sizing: border-box;
  width: 0px;
  height: 35px;
  padding: 0 20px;
  outline: none;

  border-radius: 50px;
  color: #000;
  border: 1px solid #fff;
  color: ${Theme.colors.primary};
  font-size: ${Theme.fontSize.small};
  transition: all 0.8s ease;
  font-weight: normal;
  &.active {
    width: 250px;
    right: 102px;
  }
`;
export default SearchBox;
