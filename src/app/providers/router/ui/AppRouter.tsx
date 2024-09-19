import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../model/routeConfig";
import { PageLoader } from "widgets/PageLoader";

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routeConfig.map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          ></Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
