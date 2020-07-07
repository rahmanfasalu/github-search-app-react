import React from "react";
import styled from "styled-components";
import Theme from "../../theme/theme";
import { IUser } from "../../interfaces/user.type";
import { formateTitle } from "../../util/userListUtil";

function UserInfo({ user }: { user: IUser }): JSX.Element {
  return (
    <UserInfoWrapper>
      {Object.entries(user).map((item) => {
        return Tile(`${item[0]}`, `${item[1]}`);
      })}
    </UserInfoWrapper>
  );
}

function Tile(key: string, value: string): JSX.Element {
  return (
    <TileWrapper key={key + value}>
      <Title>{formateTitle(key)}</Title>
      <Info>{value}</Info>
    </TileWrapper>
  );
}

const UserInfoWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 90%;
`;

const TileWrapper = styled.div`
  width: 200px;
  height: 100px;
  margin: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${Theme.colors.secondary};
  color: ${Theme.colors.white};
`;

const Title = styled.span`
  width: 100%;
  text-transform: capitalize;
  padding: 5px 0;
  border-radius: 10px 10px 0px 0px;
  background: ${Theme.colors.primary};
  font-size: ${Theme.fontSize.span};
`;

const Info = styled.p`
  margin: 10px 0 0 0;
  font-size: 20px;
`;
export default UserInfo;
