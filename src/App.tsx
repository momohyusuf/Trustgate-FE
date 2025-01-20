import { Routes, Route } from "react-router";
import { publicPages } from "./constants/pages";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {publicPages.general.map((page) => (
          <Route path={page.path} element={<page.component />} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
