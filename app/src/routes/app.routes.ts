import Home from "../screens/Home";
import Repo from "../screens/Repo";
import RouteType from "../interfaces/route.type";
import UserDetails from "../screens/UserDetails";
import RepoDetails from "../screens/RepoDetails";
export const appRoutes: RouteType[] = [
  { path: "/", exact: true, component: Home },
  { path: "/user", exact: true, component: Home },
  { path: "/user/:id", exact: false, component: UserDetails },
  { path: "/repo", exact: true, component: Repo },
  { path: "/repo/:id", exact: false, component: RepoDetails },
];

export default appRoutes;
