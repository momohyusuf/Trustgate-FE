import { Routes, Route } from "react-router";
import { publicPages, authPages, protectedPages } from "./constants/pages";

import MainLayout from "./layout/MainLayout";
import UserDashBoardLayout from "./layout/UserDashBoardLayout";
import Dashboard from "./pages/protected/user/Dashboard";

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
            path={`/auth${page.path}`}
            element={<page.component />}
          />
        ))}

        <Route path="dashboard" element={<UserDashBoardLayout />}>
          <Route index element={<Dashboard />} />
          {protectedPages.general.map((page) => (
            <Route
              key={page.path}
              path={`${page.path}`}
              element={<page.component />}
            />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
