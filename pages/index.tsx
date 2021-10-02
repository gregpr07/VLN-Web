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
  const SectionDiv = ({ children, title, buttonText = "", className = "" }) => (
    <Maxer>
      <div className={"py-8 px-4 sm:px-6 lg:px-8" + className}>
        <div className="grid grid-flow-col col-span-2 items-center space-between w-full pb-6">
          <div>
            <h1 className="text-2xl leading-8 font-extrabold">{title}</h1>
          </div>
          {buttonText && (
            <div className="flex justify-end">
              <ButtonRound Icon={ArrowRightIcon} text={buttonText} />
            </div>
          )}
        </div>

        {children}
      </div>
    </Maxer>
  );

  const Header = () => (
    <div
      className={
        "px-4 sm:px-6 lg:px-8 pt-8 md:pt-8 lg:pt-12 text-xs bg-red-600 " +
        "md:text-sm"
      }
      // ref={headerRef}
    >
      <div>
        <div className="pb-4 sm:pb-8 md:pb-4">
          <Maxer>
            <div className="">
              <h1 className="text-2xl leading-8 font-extrabold text-white text-center">
                Exchange ideas.
                <br />
                Share your knowledge.
              </h1>
              <div className="relative mt-6 mb-8">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 hidden md:flex items-center">
                  <SearchIcon
                    className="h-5 w-5 text-gray-400 text-sm font-medium"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block h-10 w-full font-normal border-none bg-gray-50 rounded-md py-3 md:pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-red-600 sm:text-sm"
                  placeholder="Search for lectures"
                  type="search"
                />
              </div>
            </div>
          </Maxer>
        </div>
      </div>
    </div>
  );

  const Event = ({ ...props }: IEvent) => (
    <div className="bg-gray rounded p-3 bg-gray-50">
      <div className="grid grid-flow-col justify-start gap-6 items-center">
        <div className="rounded bg-white h-12 w-12 text-center py-1">
          <h3 className="text-lg leading-6 font-bold text-gray-800">
            {props.date.day}
          </h3>
          <p className="text-xs leading-4 font-normal text-gray-500">
            {props.date.month}
          </p>
        </div>
        <div>
          <h4 className="text-xs leading-4 font-semibold text-gray-900">
            {props.title}
          </h4>
          <p className="text-xs leading-4 font-normal text-gray-500 pt-1">
            {props.datePosted}, {props.location}
          </p>
        </div>
      </div>
    </div>
  );

  const Category = ({ ...props }: ICategory) => (
    <div>
      <div className="rounded-lg bg-gray-50 h-40 w-40"></div>
      <div className="text-sm leading-5 font-medium">{props.title}</div>
    </div>
  );

  const Categories = ({ categories }) => {
    const [slide, setSlide] = useState(0);
    const handleSlide = (newSlide: number) => {
      if (newSlide < categories.length && newSlide >= 0) {
        setSlide(newSlide);
      }
    };
    return (
      <div>
        <Carousel
          plugins={[
            // "infinite",
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
          ]}
          value={slide}
          onChange={handleSlide}
        >
          {categories.map((category, index) => (
            <Category {...category} key={index} />
          ))}
        </Carousel>
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
      <div>
        <Header />
      </div>
      {/* categories */}
      <SectionDiv title="Top Categories" buttonText="See all">
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

      {/* events */}
      <SectionDiv title="Upcoming events">
        <div className="gap-2 grid grid-flow-row mb-6">
          {events.map((event, index) => (
            <Event {...event} key={index} />
          ))}
        </div>
        <ButtonRed text="All events" Icon={ArrowRightIcon} className="w-full" />
      </SectionDiv>
    </Layout>
  );
};

export default IndexPage;
