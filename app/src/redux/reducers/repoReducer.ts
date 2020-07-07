import { IRepo, IRepoResponse } from "../../interfaces/repo.type";
import { repoActionType } from "./../actionTypes/repoActionTypes";

import * as types from "../actionTypes/repoActionTypes";
import initialState from "../initialState";

export default function userReducer(
  state: IRepoResponse = initialState.repos,
  action: repoActionType
) {
  switch (action.type) {
    case types.FETCH_REPO_ACTION:
      return state;
    case types.FETCH_REPO_ACTION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
