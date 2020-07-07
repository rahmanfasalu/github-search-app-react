import React, { useEffect, useState } from "react";
import { RouteComponentProps, Link } from "react-router-dom";

import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Theme from "../../theme/theme";
import { loadUsers } from "../../redux/actions/userActions";
import NotFound from "../../components/NotFound";
import { IRepoResponse, IRepo } from "../../interfaces/repo.type";
import IAppState from "../../interfaces/app.type";

import RepoInfo from "../../components/RepoInfo/indext";

interface MatchParams {
  id: string;
}
interface MatchProps extends RouteComponentProps<MatchParams> {}

function RepoDetails({ match }: MatchProps): JSX.Element {
  const dispatch = useDispatch();
  const [id] = useState<string>(match.params.id);
  let repoDetails: IRepo = useSelector((state: IAppState) => {
    return state.repos.items.find((repo: IRepo) => repo.id === parseInt(id));
  });

  useEffect(() => {
    if (!repoDetails) {
      let query = sessionStorage.getItem(`REPO_QUERY`);
      if (query) {
        let result = sessionStorage.getItem(`REPO_${query}`);
        if (result) {
          const reposFromCache: IRepo[] = JSON.parse(result).items;
          repoDetails = reposFromCache.find(
            (repo: IRepo) => repo.id === parseInt(id)
          );
        }
      }
    }
  }, [dispatch]);

  return (
    <RepoDetailsWrapper>
      <BackButton to="/repo">Back</BackButton>
      {repoDetails && <RepoInfo repo={repoDetails} />}
      {!repoDetails && <NotFound />}
    </RepoDetailsWrapper>
  );
}

const RepoDetailsWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const BackButton = styled(Link)`
  border-radius: 30px 30px 30px 0px;
  background: ${Theme.colors.primary};
  padding: 15px;
  margin-left: 25px;
  display: block;
  margin-top: 32px;
  width: 50px;
  color: ${Theme.colors.white};
  text-align: center;
  font-size: ${Theme.fontSize.span};
  &:hover {
    background: ${Theme.colors.secondary};
    color: ${Theme.colors.white};
  }
`;

export default RepoDetails;
