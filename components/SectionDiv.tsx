import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Maxer from "./BigMaxer";
import ButtonRound from "./ButtonRound";
import { ArrowRightIcon } from "@heroicons/react/solid";

type Props = {
  children?: ReactNode;
};

const SectionDiv = ({
  children,
  title = "",
  buttonText = "",
  className = "",
  bg = "",
}) => (
  <div className={bg}>
    <Maxer>
      <div className={"py-8 px-4 sm:px-6 lg:px-8 " + className}>
        <div className="grid grid-flow-col col-span-2 items-center space-between w-full pb-6">
          {title && (
            <div>
              <h1 className="font-extrabold text-gray-800 leading-6 text-xl md:text-3xl tracking-tight">
                {title}
              </h1>
            </div>
          )}

          {buttonText && (
            <div className="flex justify-end">
              <ButtonRound Icon={ArrowRightIcon} text={buttonText} />
            </div>
          )}
        </div>

        {children}
      </div>
    </Maxer>
  </div>
);

export default SectionDiv;
