import { FETCH_USER_ACTION } from "./../actionTypes/userActionTypes";

import { API_SEARCH_REPOS } from "../../constants/app.config.constants";
import { IRepo, IRepoResponse } from "../../interfaces/repo.type";
import * as types from "./../actionTypes/repoActionTypes";
import { gitHubServices } from "../../api/apiServices";

import data from "../../_data/users.json";

export const loadRepoActionSuccess = (
  data: IRepoResponse
): types.repoActionType => {
  return {
    type: types.FETCH_REPO_ACTION_SUCCESS,
    payload: data,
  };
};

export const loadDataAction = (): types.repoActionType => {
  return {
    type: types.FETCH_REPO_ACTION,
  };
};

export function loadRepos(query: string) {
  return function (dispatch: (arg0: any) => void) {
    dispatch(loadDataAction());
    const api = API_SEARCH_REPOS.replace("##", query);
    gitHubServices.fetchUserData(api).then((data: IRepoResponse) => {
      dispatch(loadRepoActionSuccess(data));
    });
  };
}
