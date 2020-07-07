import { IRepo, IRepoResponse } from "../../interfaces/repo.type";

export interface LoadRepoActionType {
  type: typeof FETCH_REPO_ACTION;
}

export interface LoadRepoActionSuccessType {
  type: typeof FETCH_REPO_ACTION_SUCCESS;
  payload: IRepoResponse;
}
export const FETCH_REPO_ACTION = "FETCH_REPO_ACTION";
export const FETCH_REPO_ACTION_SUCCESS = "FETCH_REPO_ACTION_SUCCESS";

export type repoActionType = LoadRepoActionSuccessType | LoadRepoActionType;
