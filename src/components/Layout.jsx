import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ title, children }) => (
  <div className="flex flex-col min-h-screen">
    <Header title={title} />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default Layout;
