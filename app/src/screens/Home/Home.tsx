import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import SearchBox from "../../components/SearchBox";
import { loadUsers } from "../../redux/actions/userActions";
import Pagination from "../../components/Pagination";
import { IUser } from "../../interfaces/user.type";
import IAppState from "../../interfaces/app.type";
import UserList from "../../components/UsersList";
import NotFound from "../../components/NotFound";
import { RESULT_PER_PAGE } from "../../constants/app.config.constants";
import { compareValues } from "../../util/userListUtil";

function Home(): JSX.Element {
  const dispatch = useDispatch();
  const [query, setQuery] = useState<string>("");
  const [sortKey, setSortKey] = useState<string>("login");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const usersPerPage = RESULT_PER_PAGE;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersInCurrentPage, setUsersInCurrentPage] = useState<IUser[]>([]);

  const queryResponse = useSelector((state: IAppState) => {
    return state.users;
  });

  const [users, setUsers] = useState<IUser[]>(queryResponse.items);
  const [totalCount, setTotalCount] = useState<number>(
    queryResponse.total_count
  );

  useEffect(() => {
    if (query) {
      sessionStorage.setItem(`QUERY`, query);
      let result = sessionStorage.getItem(query);
      if (result) {
        const usersFromCache: IUser[] = JSON.parse(result).items;
        setUsers(usersFromCache);
      } else {
        dispatch(loadUsers(query));
      }
    }
  }, [query]);

  useEffect(() => {
    //caching
    sessionStorage.setItem(query, JSON.stringify(queryResponse));
    setUsers(queryResponse.items);
    setTotalCount(queryResponse.total_count);
  }, [queryResponse]);

  useEffect(() => {
    setUsers(users.sort(compareValues(sortKey, sortOrder)));
    getUserForCurrentPage();
    return () => {};
  }, [sortKey, sortOrder, users]);

  useEffect(() => {
    if (users) {
      getUserForCurrentPage();
    } else {
      setUsersInCurrentPage([]);
    }
    return () => {};
  }, [currentPage]);

  const getUserForCurrentPage = () => {
    const indexOfLastUserInPage = currentPage * usersPerPage;
    const indexOfFirstUserInPage = indexOfLastUserInPage - usersPerPage;
    setUsersInCurrentPage(
      users.slice(indexOfFirstUserInPage, indexOfLastUserInPage)
    );
  };

  return (
    <HomeWrapper>
      <H3>Search Users</H3>
      <SearchBox setQuery={setQuery} />
      {users && users.length > 0 && (
        <>
          <TotalResults>{`${users.length} users loaded`}</TotalResults>
          <UserList
            users={usersInCurrentPage}
            setSortKey={setSortKey}
            setSortOrder={setSortOrder}
            sortOrder={sortOrder}
            sortKey={sortKey}
          />
          <Pagination
            perPage={usersPerPage}
            total={users.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const TotalResults = styled.p`
  text-align: center;
`;
const H3 = styled.h3`
  text-align: center;
`;
export default Home;
