import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

import Navigation from "./Navbar";
import Footer from "./Footer";
import Maxer from "./Maxer";

type Props = {
  children?: ReactNode;
  title?: string;
  useMaxer?: boolean;
  useNavigation?: boolean;
  useFooter?: boolean;
};

const Layout = ({
  children,
  title = "Videolectures.net",
  useMaxer = false,
  useNavigation = true,
  useFooter = true,
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {useNavigation && (
      <>
        <Navigation />
        <div className="pt-14" />
      </>
    )}
    {useMaxer ? <Maxer>{children}</Maxer> : children}
    {useFooter && <Footer />}
  </div>
);

export default Layout;
