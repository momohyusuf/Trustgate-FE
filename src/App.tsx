import { Routes, Route } from "react-router";
import { publicPages, authPages } from "./constants/pages";

import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {publicPages.general.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<page.component />}
          />
        ))}
        {authPages.general.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<page.component />}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
