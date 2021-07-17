import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

import Navigation from "./Navbar";
import Footer from "./Footer";
import Maxer from "./Maxer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Videolectures.net" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navigation />
    </header>
    <Maxer>{children}</Maxer>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Layout;
