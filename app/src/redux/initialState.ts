import IAppState from "../interfaces/app.type";

const initialState: IAppState = {
  users: {
    total_count: null,
    incomplete_results: false,
    items: [],
  },
  repos: {
    total_count: null,
    incomplete_results: false,
    items: [],
  },
};

export default initialState;
