import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Theme from "../../theme/theme";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import { IRepo } from "../../interfaces/repo.type";
interface RepoListType {
  repos: IRepo[];
  sortOrder: string;
  sortKey: string;
  setSortKey: React.Dispatch<React.SetStateAction<string>>;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}

interface ColProps {
  sortOrder?: string;
  activeSort?: boolean;
}
function RepoList({
  repos,
  sortKey,
  sortOrder,
  setSortKey,
  setSortOrder,
}: RepoListType): JSX.Element {
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
    <ReposListWrapper>
      <ReposListHeader>
        <Col
          onClick={(e) => {
            handleClick("name");
          }}
        >
          Name
          {sortKey === "name" ? (
            sortOrder === "asc" ? (
              <i className="fa fa-sort-down"></i>
            ) : (
              <i className="fa fa-sort-up"></i>
            )
          ) : (
            ""
          )}
        </Col>

        <Col>Url</Col>

        <Col
          onClick={(e) => {
            handleClick("description");
          }}
        >
          Description
          {sortKey === "description" ? (
            sortOrder === "asc" ? (
              <i className="fa fa-sort-down"></i>
            ) : (
              <i className="fa fa-sort-up"></i>
            )
          ) : (
            ""
          )}
        </Col>

        <Col>Owner</Col>
      </ReposListHeader>
      <ReposListSection>
        {repos.map(
          (repo: IRepo): JSX.Element => {
            return UserRow(repo, history);
          }
        )}
      </ReposListSection>
    </ReposListWrapper>
  );
}

function UserRow(repo: IRepo, history: any) {
  const viewDetails = () => {
    let path = `/repo/${repo.id}`;
    history.push(path);
  };

  return (
    <Row key={repo.id} onClick={viewDetails}>
      <Col>{repo.name}</Col>
      <Col>{repo.html_url}</Col>
      <Col>{repo.description}</Col>
      <Col>
        {repo.owner.login}:
        <ReposListImg src={repo.owner.avatar_url}></ReposListImg>
      </Col>
    </Row>
  );
}

const ReposListSection = styled.section``;
const ReposListImg = styled.img`
  width: 50px;
  height: 50px;
`;
const ReposListWrapper = styled.section`
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
const ReposListHeader = styled.header`
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

export default RepoList;
