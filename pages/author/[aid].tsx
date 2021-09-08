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
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const author = {
  name: "Cameron Williamson",
  profileImage:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2F5470%2Ff%2F2010%2F105%2F4%2F5%2Frandom_person_by_vurtov.jpg&f=1&nofb=1",
  title: "Researcher, Research Group for Language Technology, Ljubljana",
  website: "cameronwilliamsonresearcher.org",
  description:
    "As Gregor Samsa awoke one morning out of restless dreyarnams, he found himself in bed, transformed into a gargantuan pest. He lay on his hard, armored back and saw, as he raised his head a little, his domed, brown belly...",
  socials: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ],
};

const lectures = [
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title: "As Gregor Samsa awoke one morning out of restless dreyarnams",
    author: "Darko Darkic",
    date: "Nov 20, 2007",
    views: "100345",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title: "Lecture 2: C/C++ Data Types - Interpretations",
    author: "Darko Darkic",
    date: "Nov 20, 2007",
    views: "100345",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title:
      "MedPath: Augmenting Health Risk Prediction via Medical Knowledge Paths",
    author: "Darko Darkic",
    date: "Nov 20, 2007",
    views: "100345",
  },
  {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    title: "Uvodni nagovor",
    author: "Darko Darkic",
    date: "Nov 20, 2007",
    views: "100345",
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

const cateogies = ["Lectures", "Events", "Hands On"];
const sorts = ["Alphabet", "Date", "Views"];

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

  const Filters = () => (
    <div className="grid grid-flow-col py-4">
      <div className="flex-grow">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex h-10 justify-center w-full rounded-md px-4 py-2 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-50 ring-none">
              All categories
              <ChevronDownIcon
                className="-mr-1 ml-2 h-6 w-4"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-left absolute left-0 mt-2 w-36 rounded-md shadow-lg bg-gray-50 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {cateogies.map((cat) => (
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-xs"
                        )}
                      >
                        {cat}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="flex flex-row gap-2 flex-grow justify-end">
        <div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex  h-10justify-center w-full rounded-md px-4 py-2 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-50 ring-none">
                Sort by
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-6 w-4"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-gray-50 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {sorts.map((sort) => (
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-xs"
                          )}
                        >
                          {sort}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="bg-gray-50 p-1 rounded-md h-10 w-10 flex justify-center items-center">
          <SwitchVerticalIcon className=" h-6 w-6 text-gray-600" />
        </div>
      </div>
    </div>
  );

  return (
    <Layout title="Lecture | XYZ" useMaxer={false}>
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-24 md:pt-8 lg:pt-12 bg-gradient-to-b from-red-600 to-red-800 text-xs">
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
                  <div className="text">
                    <p className="text-gray-300 font-light">{author.website}</p>
                  </div>
                </div>
              </div>
            </div>
          </Maxer>
        </div>
      </div>

      <Maxer>
        {/* About */}
        <div className="p-4 sm:p-6 lg:p-8">
          <h3 className="font-bold leading-6 pb-2">About</h3>
          <p className="text-gray-600 font-normal text-sm leading-5">
            {author.description}
          </p>
          <ButtonlessRed className="pt-4">Read More</ButtonlessRed>

          <div className="py-10 flex flex-row gap-6 items-center">
            <div className="sm:flex-grow">
              <ButtonRed Icon={PlusIcon} text="Follow" />
            </div>
            <div>
              <p className="text-gray-900 font-extrabold text-sm">
                Get in touch
              </p>
              <div className="flex flex-row gap-4 pt-2">
                {author.socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 pt-2 sm:hidden" />

        {/* Uploaded videos */}
        <SectionDiv>
          <h3 className="font-extrabold text-gray-800 leading-6 pb-2 text-xl">
            Uploaded videos
          </h3>

          <Filters />

          <div className="grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {lectures.map((lecture, index) => (
              <div
                className={
                  "py-2.5 px-2 rounded-md grid grid-flow-col gap-3 items-center justify-start" +
                  (!(index % 2) ? " bg-gray-50 md:bg-transparent" : "") +
                  " " +
                  "md:shadow md:grid-flow-row md:p-0 md:gap-0 md:items-start"
                }
              >
                <div>
                  <img
                    className="object-cover shadow-lg rounded md:rounded-b-none md:shadow-none h-14 w-24 md:h-40 md:w-full"
                    src={lecture.image}
                    alt=""
                  />
                </div>
                <div className="text-xs md:p-4">
                  <h4 className="leading-4 text-gray-900 font-semibold pb-1">
                    {lecture.title}
                  </h4>
                  <div className="md:py-4">
                    <p className="text-gray-500 font-normal leading-4">
                      {lecture.author}
                    </p>
                    <div className="flex flex-row text-gray-500 font-normal leading-4 gap-1 ">
                      <p>{lecture.date}</p>
                      <p>&middot;</p>
                      <p>{lecture.views} views</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex">
                      <div className="bg-red-100 rounded-full px-4 text-red-700">
                        Workshop
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-center pt-6">
            <button className="py-3 px-6 bg-gray-50 rounded text-sm text-gray-700 font-medium">
              Load more lectures
            </button>
          </div>
        </SectionDiv>

        {/* Responses */}
        <SectionDiv>
          <div className="md:max-w-2xl">
            <h3 className="font-extrabold text-gray-800 leading-6 pb-6 text-xl">
              Responses
            </h3>

            <h3 className="font-semibold text-gray-400 leading-5 pb-2 text-sm">
              Write your response
            </h3>

            {/* Comment Box */}
            <div className="bg-gray-50 flex flex-row py-2 px-2 rounded-md gap-1.5">
              <div>
                <img
                  className="object-cover shadow-lg rounded-full h-10 w-10"
                  src={author.profileImage}
                  alt=""
                />
              </div>
              <div className="flex-grow">
                <input
                  className="h-10 bg-transparent px-2 font-normal leading-5 text w-full text-sm"
                  placeholder="Write comment ..."
                />
              </div>
              <div>
                <ButtonBlack text="Comment" />
              </div>
            </div>

            {/* Comments */}
            <div>
              <div className="flex flex-row py-2 px-4 rounded-md gap-1 items-center h-5 text-gray-500 pt-10 text-lg font-bold mb-4">
                <ChatAlt2Icon className="h-5" />
                <p className="text-sm">{comments.length} comments</p>
              </div>

              {comments.map((comment) => (
                <div className="p-4 bg-gray-50 grid grid-flow-col gap-4 mt-2 rounded">
                  <div className="flex-grow">
                    <img
                      className="object-cover shadow-lg rounded-full h-10 w-10"
                      src={comment.person.profileImage}
                      alt=""
                    />
                  </div>
                  <div className="flex-grow-0 text-xs">
                    <div className="">
                      <h4 className="text-gray-900 leading-5 font-semibold">
                        {comment.person.name}
                      </h4>
                      <p className="text-gray-500 leading-5 font-normal">
                        {comment.posted}
                      </p>
                    </div>
                    <div className="pt-1">
                      <p className="text-gray-600 leading-5 font-normal">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex flex-row justify-center pt-6">
                <button className="py-3 px-6 bg-gray-50 rounded text-sm text-gray-700 font-medium">
                  Load more comments
                </button>
              </div>
            </div>
          </div>
        </SectionDiv>
      </Maxer>
    </Layout>
  );
};

export default Lecture;
