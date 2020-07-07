import React from "react";
import RouteType from "../interfaces/route.type";
import { Route } from "react-router-dom";
function BuildRoute({ routes }: { routes: RouteType[] }): JSX.Element {
  return (
    <>
      {routes.map(({ path, component, exact }: RouteType, key) => (
        <Route
          exact={exact ? exact : false}
          path={path}
          component={component}
          key={key}
        />
      ))}
    </>
  );
}
export default BuildRoute;
