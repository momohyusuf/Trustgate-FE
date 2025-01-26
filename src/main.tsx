import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ConfigProvider } from "antd";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#787AD6",
          fontFamily: "Inter",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>
);
