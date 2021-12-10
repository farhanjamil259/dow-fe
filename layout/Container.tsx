import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type ContainerProps = {
  children: React.ReactElement | React.ReactElement[];
};

export default ({ children }: ContainerProps): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
};
