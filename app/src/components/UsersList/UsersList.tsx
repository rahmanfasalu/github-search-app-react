import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Theme from "../../theme/theme";
import { formateTitle } from "../../util/userListUtil";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import { IUser } from "../../interfaces/user.type";
interface UserListType {
  users: IUser[];
  sortOrder: string;
  sortKey: string;
  setSortKey: React.Dispatch<React.SetStateAction<string>>;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}

interface ColProps {
  sortOrder?: string;
  activeSort?: boolean;
}
function UsersList({
  users,
  sortKey,
  sortOrder,
  setSortKey,
  setSortOrder,
}: UserListType): JSX.Element {
  const history = useHistory();
  const { width } = useWindowDimensions();
  const handleClick = (key: string) => {
    if (key === sortKey) {
      sortOrder === "asc" ? setSortOrder("desc") : setSortOrder("asc");
    } else {
      setSortKey(key);
    }
  };
  return (
    <UsersListWrapper>
      <UsersListHeader>
        <Col
          onClick={(e) => {
            handleClick("login");
          }}
        >
          Login
          {sortKey === "login" ? (
            sortOrder === "asc" ? (
              <i className="fa fa-sort-down"></i>
            ) : (
              <i className="fa fa-sort-up"></i>
            )
          ) : (
            ""
          )}
        </Col>

        <Col>Profile Pic</Col>

        <Col
          onClick={(e) => {
            handleClick("html_url");
          }}
        >
          Link to git repo
          {sortKey === "html_url" ? (
            sortOrder === "asc" ? (
              <i className="fa fa-sort-down"></i>
            ) : (
              <i className="fa fa-sort-up"></i>
            )
          ) : (
            ""
          )}
        </Col>
      </UsersListHeader>
      <UserListSection>
        {users.map(
          (user: IUser): JSX.Element => {
            return UserRow(user, history);
          }
        )}
      </UserListSection>
    </UsersListWrapper>
  );
}

function UserRow(user: IUser, history: any) {
  const viewDetails = () => {
    let path = `/user/${user.id}`;
    history.push(path);
  };

  return (
    <Row key={user.id} onClick={viewDetails}>
      <Col>{user.login}</Col>
      <Col>
        <UserListImg src={user.avatar_url}></UserListImg>
      </Col>
      <Col>{user.html_url}</Col>
    </Row>
  );
}

const UserListSection = styled.section``;
const UserListImg = styled.img`
  width: 50px;
  height: 50px;
`;
const UsersListWrapper = styled.section`
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
  padding-bottom: 100px;
`;
const Col = styled.div<ColProps>`
  flex: 1;
  cursor: ${(sortOrder) =>
    sortOrder ? Theme.colors.secondary : Theme.colors.primary};
`;
const UsersListHeader = styled.header`
  display: flex;
  align-items: center;

  color: ${Theme.colors.white};
  background: ${Theme.colors.secondary};
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  ${Col} {
    text-transform: capitalize;
    padding: 10px;
    .fa {
      margin-left: 5px;
      font-size: 20px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  margin-top: 2px;
  align-items: center;
  text-align: center;
  cursor: pointer;
  ${Col} {
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
  }
`;

export default UsersList;
