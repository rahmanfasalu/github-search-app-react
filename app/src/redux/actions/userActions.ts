import { API_SEARCH_USERS } from "../../constants/app.config.constants";
import { IUser, IUserResponse } from "../../interfaces/user.type";
import * as types from "../actionTypes/userActionTypes";
import { gitHubServices } from "../../api/apiServices";

export const loadDataActionSuccess = (
  data: IUserResponse
): types.userActionType => {
  return {
    type: types.FETCH_USER_ACTION_SUCCESS,
    payload: data,
  };
};

export const loadDataAction = (): types.userActionType => {
  return {
    type: types.FETCH_USER_ACTION,
  };
};

export function loadUsers(query: string) {
  return function (dispatch: (arg0: any) => void) {
    dispatch(loadDataAction());
    const api = API_SEARCH_USERS.replace("##", query);
    gitHubServices.fetchUserData(api).then((data: IUserResponse) => {
      dispatch(loadDataActionSuccess(data));
    });
  };
}
