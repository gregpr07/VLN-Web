import Layout from "@components/Layout";

import { useRouter } from "next/router";
import BigMaxer from "@components/BigMaxer";
import ButtonlessRed from "@components/ButtonLesRed";
import ButtonRed from "@components/ButtonRed";
import Maxer from "@components/BigMaxer";
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
import {
  ArrowRightIcon,
  BookmarkAltIcon,
  ChevronDownIcon,
  ClockIcon,
} from "@heroicons/react/solid";
import Lectures from "@components/Lectures";
import Filters from "@components/Filters";
import Lectures2 from "@components/lectures2";
import Filters2 from "@components/Filters_playlist";
import cat from "@components/Categories";
import Cat from "@components/Categories";
import ButtonRound from "@components/ButtonRound";
import LoadMore from "@components/ButtonLoadMore";

const author = {
  name: "Joe Average",
  profileImage:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2F5470%2Ff%2F2010%2F105%2F4%2F5%2Frandom_person_by_vurtov.jpg&f=1&nofb=1",
  title: "Student, University of Ljubljana",
};

const events = [
  {
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    title: "Conference on 100 Years of alan Turing and 20 Years of SLAIS",
    videos: "15",
    views: "19580",
  },
  {
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    title: "Conference on 100 Years of alan Turing and 20 Years of SLAIS",
    videos: "15",
    views: "19580",
  },
  {
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    title: "Conference on 100 Years of alan Turing and 20 Years of SLAIS",
    videos: "15",
    views: "19580",
  },
  {
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    title: "Conference on 100 Years of alan Turing and 20 Years of SLAIS",
    videos: "15",
    views: "19580",
  },
];

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

const people = [
  {
    name: "Principle of Systems Biology illustrated using Virtual Heart",
    title: "Nov 20, 2007",
    role: "452228 Views",
    email: "Denis Noble",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    category: "Workshop",
  },
  {
    name: "Principle of Systems Biology illustrated using Virtual Heart",
    title: "Nov 20, 2007",
    role: "452228 Views",
    email: "Denis Noble",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    category: "Workshop",
  },
  {
    name: "Principle of Systems Biology illustrated using Virtual Heart",
    title: "Nov 20, 2007",
    role: "452228 Views",
    email: "Denis Noble",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    category: "Workshop",
  },
  {
    name: "Principle of Systems Biology illustrated using Virtual Heart",
    title: "Nov 20, 2007",
    role: "452228 Views",
    email: "Denis Noble",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    category: "Workshop",
  },
  {
    name: "Principle of Systems Biology illustrated using Virtual Heart",
    title: "Nov 20, 2007",
    role: "452228 Views",
    email: "Denis Noble",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    category: "Workshop",
  },
];

const cateogories = ["Playlist", "Notes", "Bookmarks", "Comments", "Following"];

const Lecture = () => {
  const router = useRouter();
  const { pid } = router.query;

  const SectionDiv = ({ children }) => (
    <div className="p-4 pt-8 sm:p-6 lg:p-8">{children}</div>
  );

  return (
    <Layout title="Bookmarks" useMaxer={false}>
      {/* Header */}
      <div
        className={
          "px-4 sm:px-0 lg:px-8 pt-24 md:pt-8 lg:pt-12 bg-gradient-to-b from-red-600 to-red-800 text-xs " +
          "lg:max-h-44 md:text-sm"
        }
      >
        <div className="pb-4 sm:pb-8 md:pb-4">
          <Maxer>
            <div className="md:gap-6 sm:px-6 md:space-y-0 gap-3 grid grid-flow-col justify-start">
              <div
                className="h-20 w-20 md:h-44 md:w-44"
                style={{ aspectRatio: "1" }}
              >
                <img
                  className="object-cover shadow-lg rounded-lg h-full"
                  src={author.profileImage}
                  alt=""
                />
              </div>
              <div className="md:col-span-2">
                <div className="">
                  <div className="text-white font-medium space-y-1">
                    <h3 className="font-extrabold text-2xl md:text-5xl leading-8 md:leading-none">
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
          <h3 className="font-extrabold leading-6 pb-2 text-gray-800 text-2xl lg:pt-8">
            Joe's dashboard
          </h3>
          <Cat />
          <Filters />
        </div>
        {/* Bookmarks */}
        <div className="flex flex-col px-7 ">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left leading-4 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        TITLE
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        UPLOADED
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        VIEWS
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        CATEGORY
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-sm"
                                src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-semibold text-gray-900">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {person.title}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {person.role}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-700">
                            {person.category}
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                              />
                            </svg>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center pt-6">
            <button className="py-3 px-6 bg-gray-50 rounded text-sm text-gray-700 font-medium">
              Load more lectures
            </button>
          </div>
        </div>
      </Maxer>
    </Layout>
  );
};

export default Lecture;
