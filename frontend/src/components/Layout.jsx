import { Outlet } from "react-router-dom";
import Header from "./header.jsx";
import React from 'react';

// import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
