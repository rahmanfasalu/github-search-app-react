import { IUser, IUserResponse } from "../../interfaces/user.type";
import * as types from "../actionTypes/userActionTypes";
import initialState from "../initialState";

import { userActionType } from "../actionTypes/userActionTypes";

export default function userReducer(
  state: IUserResponse = initialState.users,
  action: userActionType
) {
  switch (action.type) {
    case types.FETCH_USER_ACTION:
      return state;
    case types.FETCH_USER_ACTION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
