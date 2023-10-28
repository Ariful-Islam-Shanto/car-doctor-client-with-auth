import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import route from "./Route/Route";
import AuthProvider from "./Auth Provider/AuthProvider";



ReactDOM.createRoot(document.getElementById("root")).render(
<div className="max-w-6xl mx-auto">
<React.StrictMode>
  <AuthProvider>
    <RouterProvider router={route} />
    </AuthProvider>
  </React.StrictMode>
</div>
);