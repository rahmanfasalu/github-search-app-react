import { IUser, IUserResponse } from "../../interfaces/user.type";

export interface LoadUserActionType {
  type: typeof FETCH_USER_ACTION;
}

export interface LoadUserActionSuccessType {
  type: typeof FETCH_USER_ACTION_SUCCESS;
  payload: IUserResponse;
}
export const FETCH_USER_ACTION = "FETCH_USER_ACTION";
export const FETCH_USER_ACTION_SUCCESS = "FETCH_USER_ACTION_SUCCESS";

export type userActionType = LoadUserActionSuccessType | LoadUserActionType;
