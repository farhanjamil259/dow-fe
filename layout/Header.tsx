import Head from "next/head";
import Link from "next/link";
import React from "react";

const Header = (): React.ReactElement => {
  return (
    <div className="header">
      <div className="header-logo">Doges of War</div>
      <div className="header-menu">
        <Link href={"/"}>
          <a className="header-menu-link">Home</a>
        </Link>
        <Link href={"/roadmap"}>
          <a className="header-menu-link">Roadmap</a>
        </Link>
        <Link href={"/about"}>
          <a className="header-menu-link">About</a>
        </Link>
        <Link href={"/whitepaper"}>
          <a className="header-menu-link">Whitepaper</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
