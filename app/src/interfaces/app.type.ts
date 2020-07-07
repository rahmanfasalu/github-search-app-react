import { IUserResponse } from "./user.type";

export default interface IAppState {
  users: IUserResponse;
  repos: any;
}
