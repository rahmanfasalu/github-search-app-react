import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import SearchBox from "../../components/SearchBox";
import { loadRepos } from "../../redux/actions/repoActions";
import Pagination from "../../components/Pagination";
import { IRepo } from "../../interfaces/repo.type";
import IAppState from "../../interfaces/app.type";

import RepoList from "../../components/RepoList";
import NotFound from "../../components/NotFound";
import { RESULT_PER_PAGE } from "../../constants/app.config.constants";
import { compareValues } from "../../util/userListUtil";

function Repo(): JSX.Element {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>("");
  const [sortKey, setSortKey] = useState<string>("name");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const usersPerPage = RESULT_PER_PAGE;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [reposInCurrentPage, setReposInCurrentPage] = useState<IRepo[]>([]);

  const queryResponse = useSelector((state: IAppState) => {
    return state.repos;
  });

  const [repos, setRepos] = useState<IRepo[]>(queryResponse.items);
  const [totalCount, setTotalCount] = useState<number>(
    queryResponse.total_count
  );

  useEffect(() => {
    if (query) {
      let result = sessionStorage.getItem(`REPO_${query}`);
      if (result) {
        const reposFromCache: IRepo[] = JSON.parse(result).items;
        setRepos(reposFromCache);
      } else {
        dispatch(loadRepos(query));
      }
    }
  }, [query]);

  useEffect(() => {
    //caching
    sessionStorage.setItem(`REPO_QUERY`, JSON.stringify(query));
    sessionStorage.setItem(`REPO_${query}`, JSON.stringify(queryResponse));
    setRepos(queryResponse.items);
    setTotalCount(queryResponse.total_count);
  }, [queryResponse]);

  useEffect(() => {
    setRepos(repos.sort(compareValues(sortKey, sortOrder)));
    setReposeForCurrentPage();
    return () => {};
  }, [sortKey, sortOrder, repos]);

  useEffect(() => {
    if (repos) {
      setReposeForCurrentPage();
    } else {
      setReposInCurrentPage([]);
    }
    return () => {};
  }, [currentPage]);

  const setReposeForCurrentPage = () => {
    const indexOfLastReposInPage = currentPage * usersPerPage;
    const indexOfFirstReposeInPage = indexOfLastReposInPage - usersPerPage;
    setReposInCurrentPage(
      repos.slice(indexOfFirstReposeInPage, indexOfLastReposInPage)
    );
  };

  return (
    <RepoWrapper>
      <H3>Search Repos</H3>
      <SearchBox setQuery={setQuery} />
      {repos && repos.length > 0 && (
        <>
          <TotalResults>{`${repos.length} users loaded`}</TotalResults>
          {
            <RepoList
              repos={reposInCurrentPage}
              setSortKey={setSortKey}
              setSortOrder={setSortOrder}
              sortOrder={sortOrder}
              sortKey={sortKey}
            />
          }
          <Pagination
            perPage={usersPerPage}
            total={repos.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </RepoWrapper>
  );
}

const RepoWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const TotalResults = styled.p`
  text-align: center;
`;

const H3 = styled.h3`
  text-align: center;
`;
export default Repo;
