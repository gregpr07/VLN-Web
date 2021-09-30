import Layout from "@components/Layout";

import { useRouter } from "next/router";
import BigMaxer from "@components/BigMaxer";
import ButtonlessRed from "@components/ButtonLesRed";
import ButtonRed from "@components/ButtonRed";
// import {
//   ChatAlt2Icon,
//   DotsVerticalIcon,
//   PlusIcon,
//   SwitchVerticalIcon,
// } from "@heroicons/react/solid";

import {
  ChatAlt2Icon,
  DotsVerticalIcon,
  PlusIcon,
  SwitchVerticalIcon,
} from "@heroicons/react/outline";

import ButtonBlack from "@components/ButtonBlack";

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ClockIcon } from "@heroicons/react/solid";
import Lectures from "@components/Lectures";
import Filters from "@components/Filters";
import Lectures2 from "@components/lectures2";

const author = {
  name: "Joe Average",
  profileImage:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2F5470%2Ff%2F2010%2F105%2F4%2F5%2Frandom_person_by_vurtov.jpg&f=1&nofb=1",
  title: "Student, University of Ljubljana",
};

const lectures = [
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title: "Watch history",
    author: "1464 Videos",
    date: "Updated",
    views: "Jun 12 2021",
    type: "Lecture",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title: "Busniess as usual",
    author: "1464 Videos",
    date: "Updated",
    views: "Jun 12 2021",
    type: "Lecture",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title: "Deep learning findings",
    author: "1464 Videos",
    date: "Updated",
    views: "Jun 12 2021",
    type: "Lecture",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title: "Spot and technology",
    author: "1464 Videos",
    date: "Updated",
    views: "Jun 12 2021",
    type: "Lecture",
  },
];

const Lecture = () => {
  const router = useRouter();
  const { pid } = router.query;

  const Maxer = ({ children }) => (
    <div className="mx-auto max-w-md sm:max-w-xl lg:max-w-5xl xl:max-w-7xl">
      {children}
    </div>
  );

  const SectionDiv = ({ children }) => (
    <div className="p-4 pt-8 sm:p-6 lg:p-8">{children}</div>
  );

  return (
    <Layout title="Playlist" useMaxer={false}>
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-24 md:pt-8 lg:pt-12 bg-gradient-to-b from-blue-600 to-red-800 text-xs">
        <div className="pb-4 sm:pb-8">
          <Maxer>
            <div className="md:gap-6 sm:px-6 md:space-y-0 gap-3 grid grid-flow-col justify-start">
              <div className="h-20 w-20" style={{ aspectRatio: "1" }}>
                <img
                  className="object-cover shadow-lg rounded-lg h-full"
                  src={author.profileImage}
                  alt=""
                />
              </div>
              <div className="md:col-span-2">
                <div className="">
                  <div className="text-white font-medium space-y-1">
                    <h3 className="font-extrabold text-2xl leading-8">
                      {author.name}
                    </h3>
                    <p className="text-white font-light leading-4">
                      {author.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Maxer>
        </div>
      </div>

      <Maxer>
        {/* About */}
        <div className="p-4 pt-6 pb-2 sm:p-6 lg:p-8">
          <h3 className="font-extrabold leading-6 pb-2 text-gray-800 text-2xl">
            Joe's dashboard
          </h3>
          <Filters />
        </div>

        {/* Uploaded videos */}
        <SectionDiv>
          <Lectures2 lectures={lectures} />
        </SectionDiv>
      </Maxer>
    </Layout>
  );
};

export default Lecture;
