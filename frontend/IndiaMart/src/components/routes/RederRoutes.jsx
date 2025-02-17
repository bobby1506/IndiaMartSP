import React from "react";
import { Route, Routes } from "react-router-dom";
// import ProtectedRoute from "../Auth/protectedRoute";

const RenderRoutes = ({ routes }) => {
  return (
    <Routes>
      {routes.map(({ path, element, isPrivate }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default RenderRoutes;
