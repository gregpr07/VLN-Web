import Layout from "@components/Layout";

import { useRouter } from "next/router";
import BigMaxer from "@components/BigMaxer";

import Link from "next/link";

/* This example requires Tailwind CSS v2.0+ */

import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/solid";
import ButtonRound from "@components/ButtonRound";
import { eventNames } from "process";
import Lectures from "@components/Lectures";
import Cat from "@components/Categories";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const title = {
  name: "123 Results for Test",
};

const authors = [
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title: "Denis Noble",
    author:
      "Department of Physiology, Anatomy & Genetics, University of Oxford",
    date: "3590 Views",
    views: "14 Videos",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title: "Michael Forster",
    author: "Qatar Computing Research Institute",
    date: "3590 Views",
    views: "14 Videos",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title: "Emily Selman",
    author: "Institute of Formal and Applied Linguistics (ÚFAL)",
    date: "3590 Views",
    views: "14 Videos",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title: "Lawrence Hunter",
    author: "Department of Electrical Engineering and Computer Sciences",
    date: "3590 Views",
    views: "14 Videos",
  },
];

const lectures = [
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title: "As Gregor Samsa awoke one morning out of restless dreyarnams",
    author: "Darko Darkic",
    date: "Nov 20, 2007",
    views: "100345",
    type: "Workshop",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title: "Lecture 2: C/C++ Data Types - Interpretations",
    author: "Darko Darkic",
    date: "Nov 20, 2007",
    views: "100345",
    type: "Lecture",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title:
      "MedPath: Augmenting Health Risk Prediction via Medical Knowledge Paths",
    author: "Darko Darkic",
    date: "Nov 20, 2007",
    views: "100345",
    type: "Tutorial",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title:
      "MedPath: Augmenting Health Risk Prediction via Medical Knowledge Paths",
    author: "Darko Darkic",
    date: "Nov 20, 2007",
    views: "100345",
    type: "Tutorial",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title:
      "MedPath: Augmenting Health Risk Prediction via Medical Knowledge Paths",
    author: "Darko Darkic",
    date: "Nov 20, 2007",
    views: "100345",
    type: "Lecture",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title:
      "MedPath: Augmenting Health Risk Prediction via Medical Knowledge Paths",
    author: "Darko Darkic",
    date: "Nov 20, 2007",
    views: "100345",
    type: "Lecture",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title:
      "MedPath: Augmenting Health Risk Prediction via Medical Knowledge Paths",
    author: "Darko Darkic",
    date: "Nov 20, 2007",
    views: "100345",
    type: "Keynote",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title:
      "MedPath: Augmenting Health Risk Prediction via Medical Knowledge Paths",
    author: "Darko Darkic",
    date: "Nov 20, 2007",
    views: "100345",
    type: "Tutorial",
  },
];

const comments = [
  {
    person: {
      profileImage:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      name: "Jane Cooper",
    },
    posted: "13 days ago",
    content:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim reru...",
  },
  {
    person: {
      profileImage:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      name: "Jane Cooper",
    },
    posted: "13 days ago",
    content:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim reru...",
  },
  {
    person: {
      profileImage:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      name: "Jane Cooper",
    },
    posted: "13 days ago",
    content:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim reru...",
  },
];

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

const Lecture = () => {
  const router = useRouter();
  const { sid } = router.query;

  // const Maxer = ({ children }) => (
  //   <div className="mx-auto max-w-md sm:max-w-xl lg:max-w-5xl xl:max-w-7xl">
  //     {children}
  //   </div>
  // );

  const SectionDiv = ({ children }) => (
    <div className="p-4 pt-8 sm:p-6 lg:p-8">{children}</div>
  );

  return (
    <Layout title="Search" useMaxer={false}>
      {/* Header */}
      <div className="px-4 lg:px-8 pt-24 md:pt-8 lg:pt-12 ">
        <div className="pb-4 sm:pb-8">
          <BigMaxer>
            <div className="md:gap-0 sm:px-0 md:space-y-0 gap-3 grid grid-flow-col justify-start">
              <div className="md:col-span-2 px-3">
                <div className="">
                  <div className="text-gray-900 font-bold space-y-1 ">
                    <h3 className="text-2xl leading-8 font-extrabold pb-10">
                      X results for <i>{sid}</i>
                    </h3>

                    <Cat />
                  </div>
                  <div className="text"></div>
                </div>
              </div>
            </div>
          </BigMaxer>
        </div>
      </div>

      <BigMaxer>
        {/* Selection */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="h-10 flex flex-row justify-between ">
            <h3 className="text-gray-800 font-extrabold leading-7 text-xl">
              Events
            </h3>
            <ButtonRound Icon={ArrowRightIcon} text="All events" />
          </div>
          <div className="pt-4">
            {events.map((event, index) => (
              <div
                className={
                  "py-2.5 px-2 rounded-md grid grid-flow-col gap-3 items-center justify-start" +
                  (!(index % 2) ? " bg-gray-50" : "") +
                  " " +
                  "md:p-2 md:gap-0 md:items-center"
                }
              >
                <div>
                  <img
                    className="object-cover shadow-lg rounded md:shadow-none h-14 w-24 md:h-14 md:w-24"
                    src={event.image}
                    alt=""
                  />
                </div>
                <div className="text-xs md:p-4 md:hidden">
                  <h4 className="leading-4 text-gray-900 font-semibold pb-1 md:grid md:items-center md:col-span-2 md:pt-1">
                    {event.title}
                  </h4>
                  <div className="md:py-4">
                    <div className="flex flex-row md:grid md:grid-cols-2 md:gap-8 text-gray-500 font-normal leading-4 gap-1">
                      <p>{event.videos} videos</p>
                      <p className="md:hidden">&middot;</p>
                      <p>{event.views} views</p>
                    </div>
                  </div>
                </div>
                <div className="text-xs md:p-4 hidden md:grid grid-cols-5 content-center justify-center">
                  <h4 className="leading-4 text-gray-900 font-semibold pb-1 md:grid md:items-center md:pl-10 md:col-span-3 md:pt-1">
                    {event.title}
                  </h4>
                  <p className="md:text-gray-500 justify-self-end">
                    {event.videos} videos
                  </p>
                  <p className="md:text-gray-500 justify-self-end">
                    {event.views} views
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lectures */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="h-10 flex flex-row justify-between pb-2 ">
            <h3 className="text-gray-800 font-extrabold leading-7 text-xl">
              Lectures
            </h3>
            <ButtonRound Icon={ArrowRightIcon} text="All lectures" />
          </div>

          <Lectures lectures={lectures} />
        </div>

        {/* Authors */}
        <SectionDiv>
          <div className="h-10 flex flex-row justify-between pb-2 ">
            <h3 className="font-black text-gray-900 leading-6 pb-2 text-3xl">
              Authors
            </h3>
            <ButtonRound Icon={ArrowRightIcon} text="All authors" />
          </div>

          <div className="grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 pt-4">
            {authors.map((author, index) => (
              // put author.id here
              <Link href={`/author/${author.author}`}>
                <div
                  className={
                    "py-2.5 px-2 rounded-md grid grid-flow-col gap-3  justify-start" +
                    (!(index % 2) ? " bg-gray-50 md:bg-transparent" : "") +
                    " " +
                    "md:shadow md:grid-flow-row md:p-0 md:gap-0 md:items-start cursor-pointer hover:bg-gray-50"
                  }
                >
                  <div className="flex-grow">
                    <img
                      className="object-cover shadow-lg rounded-full h-10 w-10"
                      src={author.image}
                      alt=""
                    />
                  </div>
                  <div className="text-xs md:p-4">
                    <h4 className="leading-4 text-gray-900 font-semibold pb-1">
                      {author.title}
                    </h4>
                    <div className="md:py-4">
                      <p className="text-gray-500 font-normal leading-4">
                        {author.author}
                      </p>
                      <div className="flex flex-row text-gray-500 font-normal leading-4 gap-1 ">
                        <p>{author.date}</p>
                        <p>&middot;</p>
                        <p>{author.views} views</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SectionDiv>
      </BigMaxer>
    </Layout>
  );
};

export default Lecture;
