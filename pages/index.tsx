import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import Layout from "@components/Layout";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Maxer from "@components/BigMaxer";
import ButtonRound from "@components/ButtonRound";
import ButtonRed from "@components/ButtonRed";

import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Lectures from "@components/Lectures";
import SectionDiv from "@components/SectionDiv";
import { tailwindScreens } from "@services/constants";

import { TwitterTimelineEmbed } from "react-twitter-embed";
import router from "next/router";

interface IEvent {
  title: string;
  datePosted: string;
  location: string;
  date: {
    day: string;
    month: string;
  };
}

const events: IEvent[] = [
  {
    title:
      "Dan odprtih podatkov s svečano ustanovitvijo Stičišča odprtih podatkov Slovenije, Ljubljana 2020",
    datePosted: "mar 6, 2021",
    location: "Ljubljana, SI",
    date: {
      day: "6",
      month: "mar",
    },
  },
  {
    title: "Raziščimo Obzorje Evropa, Ljubljana 2020",
    datePosted: "Dec 7, 2022",
    location: "Ljubljana, SI",
    date: {
      day: "7",
      month: "dec",
    },
  },
  {
    title: "MIT World Series: MIT Energy Forum: Taking on the Challenge",
    datePosted: "May 23, 2006",
    location: "Boston, US",
    date: {
      day: "23",
      month: "mar",
    },
  },
];

interface ICategory {
  title: string;
  image: string;
}

const categories: ICategory[] = [
  {
    title: "Computer science",
    image: "",
  },
  {
    title: "Mathematics",
    image: "",
  },
  {
    title: "Physics",
    image: "",
  },
  {
    title: "Social Sciences",
    image: "",
  },
  {
    title: "Business",
    image: "",
  },
  {
    title: "Technology",
    image: "",
  },
  {
    title: "Economics",
    image: "",
  },
  {
    title: "Physics",
    image: "",
  },
];

const latest_lectures = [
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
    type: "Lecture",
  },
];

const trending_lectures = [
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
    title: "Introduction",
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
];

const IndexPage = () => {
  // Components

  const SideSectionDiv = ({ children, title, className = "" }) => (
    <Maxer>
      <div className={"py-8 px-4 sm:px-6 lg:px-8 " + className}>
        <div className="grid grid-flow-col col-span-2 items-center space-between w-full pb-6">
          <div>
            <h1 className="text-xl leading-7 font-bold">{title}</h1>
          </div>
        </div>

        {children}
      </div>
    </Maxer>
  );

  const Header = () => {
    // Services
    const [search, setSearch] = useState("");
    const handleChange = (e: any) => {
      e.preventDefault();
      setSearch(e.target.value);
    };
    const submitSearch = (e: any) => {
      e.preventDefault();
      if (search) {
        router.push(`/search/${search}/`);
      }
    };

    // const headerRef = useRef();
    // const isVisible = useOnScreen(headerRef);

    // useEffect(() => {
    //   setRedBG(isVisible);
    // }, [isVisible]);

    return (
      <div
        className={"px-4 sm:px-6 lg:px-8 text-xs bg-red-600 " + "md:text-sm"}
        id="header"
        // ref={headerRef}
      >
        <div>
          <div className="pb-4 sm:pb-8 md:pb-8 pt-4">
            <Maxer>
              <div className="">
                <h1
                  className={
                    "text-2xl leading-8 font-extrabold text-white text-center py-8 md:py-10 lg:py-12" +
                    " " +
                    "lg:text-5xl lg:leading-none lg:font-extrabold"
                  }
                  style={{ fontWeight: 800 }}
                >
                  Exchange ideas. <br className="md:hidden" />
                  Share your knowledge.
                </h1>
                <div className="relative mb-8 max-w-xl mx-auto">
                  <form onSubmit={submitSearch}>
                    <div
                      onClick={submitSearch}
                      className="cursor-pointer absolute inset-y-0 left-0 pl-3 hidden md:flex items-center"
                    >
                      <SearchIcon
                        className="h-5 w-5 text-gray-400 text-sm font-medium "
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block h-10 w-full font-normal border-none bg-gray-50 rounded-md py-3 md:pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-red-600 sm:text-sm"
                      placeholder="Search for lectures"
                      type="search"
                      value={search}
                      onChange={handleChange}
                    />
                  </form>
                </div>
              </div>
            </Maxer>
          </div>
        </div>
      </div>
    );
  };

  const Event = ({ ...props }: IEvent) => (
    <div className="bg-gray rounded p-3 pl-4 bg-gray-50">
      <div className="grid grid-flow-col justify-start gap-6 items-center">
        <div className="rounded bg-white h-12 w-12 md:h-16 md:w-16 text-center py-1 md:p-3">
          <h3 className="text-lg md:text-2xl leading-6 font-bold text-gray-800">
            {props.date.day}
          </h3>
          <p className="text-xs md:text-sm leading-4 md:leading-5 font-normal text-gray-500">
            {props.date.month}
          </p>
        </div>
        <div>
          <h4 className="text-xs md:text-sm leading-4 md:leading-5 font-semibold text-gray-900">
            {props.title}
          </h4>
          <p className="text-xs md:text-sm leading-4 md:leading-5 font-normal text-gray-500 pt-1 md:pt-2">
            {props.datePosted}, {props.location}
          </p>
        </div>
      </div>
    </div>
  );

  const Category = ({ ...props }: ICategory) => (
    <div>
      <div className="rounded-lg bg-gray-50 xl:h-44 xl:w-44 md:h-44 md:w-44 w-40 h-40"></div>
      <div className="text-sm leading-5 font-medium text-center pt-3 text-gray-700">
        {props.title}
      </div>
    </div>
  );

  const Categories = ({ categories }) => {
    const [slide, setSlide] = useState(0);
    const handleSlide = (newSlide: number) => {
      if (newSlide < categories.length && newSlide >= 0) {
        setSlide(newSlide);
      }
    };

    const plugins = (numberOfSlider: number) => {
      return {
        plugins: [
          // "arrows",
          // "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: numberOfSlider,
            },
          },
        ],
      };
    };

    const breakpoints = {
      [0]: plugins(2),
      [tailwindScreens.sm - 100]: plugins(2),
      [tailwindScreens.sm]: plugins(3),
      [tailwindScreens.md]: plugins(3),
      [tailwindScreens.lg]: plugins(4),
      [tailwindScreens.lg + 150]: plugins(5),
      [tailwindScreens.xl + 200]: plugins(6),
      [100000]: plugins(6),
    };

    console.log(breakpoints);

    return (
      <div className="pb-12">
        <Carousel
          // plugins={plugins(2).plugins}
          breakpoints={breakpoints}
          value={slide}
          onChange={handleSlide}
        >
          {categories.map((category, index) => (
            <Category {...category} key={index} />
          ))}
        </Carousel>
        <div className="hidden">
          <div className="grid grid-flow-col mt-6 content-center align-middle px-1">
            <div onClick={() => handleSlide(slide - 1)}>
              <ArrowLeftIcon className="h-4 mt-1 text-gray-400 hover:text-gray-600" />
            </div>
            <Dots
              value={slide}
              onChange={handleSlide}
              number={categories.length}
            />
            <div
              className="justify-end justify-self-end"
              onClick={() => handleSlide(slide + 1)}
            >
              <ArrowRightIcon className="h-4 mt-1 text-gray-400 hover:text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout
      title="Home | VideoLectures"
      redBG={true}
      showSearch={false}
      useNavigation="sticky"
    >
      {/* Header */}
      <div className="mb-8">
        <Header />
      </div>
      {/* categories */}
      <SectionDiv title="Top Categories" buttonText="View all">
        <Categories categories={categories} />
      </SectionDiv>

      {/* Latest lectures */}
      <SectionDiv title="Latest Lectures" buttonText="All lectures">
        <Lectures lectures={latest_lectures} />
      </SectionDiv>

      {/* Trending */}
      <SectionDiv title="Trending" buttonText="All lectures">
        <Lectures lectures={trending_lectures} />
      </SectionDiv>

      <Maxer>
        <div className="grid md:grid-flow-col mt-6">
          <SectionDiv title="Latest News" buttonText="All News">
            {/* <Lectures lectures={trending_lectures} /> */}
          </SectionDiv>
          <div className="max-w-lg">
            {/* Events */}
            <SideSectionDiv title="Upcoming events" className="md:mb-4">
              <div className="gap-2 grid grid-flow-row mb-6">
                {events.map((event, index) => (
                  <Event {...event} key={index} />
                ))}
              </div>
              <ButtonRed
                text="All events"
                Icon={ArrowRightIcon}
                className="w-full"
              />
            </SideSectionDiv>

            {/* Twitter embed */}
            <SideSectionDiv title="Latest Tweets">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="videolectures"
                options={{ height: 500 }}
              />
            </SideSectionDiv>
          </div>
        </div>
      </Maxer>
    </Layout>
  );
};

export default IndexPage;
