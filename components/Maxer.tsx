import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
};

//! change this -> outdated
const Maxer = ({ children }: Props) => (
  <div className="mx-auto max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
    {children}
  </div>
);

export default Maxer;
