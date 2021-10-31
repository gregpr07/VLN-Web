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
  useNavigation?: "sticky" | "default" | false;
  useFooter?: boolean;
  redBG?: boolean;
  showSearch?: boolean;
} & React.ButtonHTMLAttributes<HTMLDivElement>;

const Layout = ({
  children,
  title = "Videolectures.net",
  useMaxer = false,
  useNavigation = "sticky",
  useFooter = true,
  redBG = false,
  showSearch = true,
  ...divProps
}: Props) => (
  <div {...divProps}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {useNavigation && (
      <div className="bg-white">
        <Navigation
          redBG={redBG}
          showSearch={showSearch}
          sticky={useNavigation === "sticky"}
        />
        {useNavigation === "sticky" && (
          <div className={"pt-14" + (redBG ? " bg-red-600" : "")} />
        )}
      </div>
    )}
    {useMaxer ? <Maxer>{children}</Maxer> : children}
    {useFooter && <Footer />}
  </div>
);

export default Layout;
