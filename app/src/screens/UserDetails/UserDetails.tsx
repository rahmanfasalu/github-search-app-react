import React, { useEffect, useState } from "react";
import { RouteComponentProps, Link } from "react-router-dom";

import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Theme from "../../theme/theme";
import { loadUsers } from "../../redux/actions/userActions";
import NotFound from "../../components/NotFound";
import { IUserResponse, IUser } from "../../interfaces/user.type";
import IAppState from "../../interfaces/app.type";

import UserInfo from "../../components/UserInfo/UserInfo";

interface MatchParams {
  id: string;
}
interface MatchProps extends RouteComponentProps<MatchParams> {}

function UserDetails({ match }: MatchProps): JSX.Element {
  const dispatch = useDispatch();
  const [id] = useState<string>(match.params.id);
  const userDetails: IUser = useSelector((state: IAppState) => {
    return state.users.items.find((user: IUser) => user.id === parseInt(id));
  });

  useEffect(() => {
    if (!userDetails) {
    }
  }, [dispatch, userDetails]);

  return (
    <UserDetailsWrapper>
      <BackButton to="/user">Back</BackButton>
      {userDetails && <UserInfo user={userDetails} />}
      {!userDetails && <NotFound />}
    </UserDetailsWrapper>
  );
}

const UserDetailsWrapper = styled.div`
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

export default UserDetails;
