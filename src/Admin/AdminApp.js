import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./AdminComponets/Dashboard";
import Login from "./AdminComponets/Login";

function AdminApp() {

  return (
    <>
      <Routes>
          <Route index element={<Dashboard />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>

    </>
  );
}

export default AdminApp;
