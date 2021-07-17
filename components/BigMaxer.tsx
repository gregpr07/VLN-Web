import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
};

const Maxer = ({ children }: Props) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-8 lg:pt-12">
    {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
    {children}
  </div>
);

export default Maxer;
