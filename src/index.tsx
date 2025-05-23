import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import "./index.css";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { router } from "./routers/Router";
import { Box } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="top-right" richColors />
      <Box sx={{ bgcolor: "#1f1f38" }}>
        <RouterProvider router={router} />
      </Box>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
