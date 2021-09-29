import React from "react";

interface ILecture {
  lectures: {
    image: string;
    title: string;
    author: string;
    date: string;
    views: string;
    type: string;
  }[];
}

const Lectures = ({ lectures }: ILecture) => (
  <div className="grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 pt-4">
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
              <div className="bg-red-100 rounded-full px-4 text-red-700 font-bold">
                {lecture.type}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Lectures;