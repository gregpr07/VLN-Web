import React, { ReactNode } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Cat = () => (
  <div className="pb-4 border-b border-gray-200 sm:pb-0 md:pt-4">
    <div className="mt-3 sm:mt-4">
      <div className="sm:hidden">
        <label htmlFor="current-tab" className="sr-only">
          Select a tab
        </label>
        <select
          id="current-tab"
          name="current-tab"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option selected>Playlists</option>

          <option>Notes</option>

          <option>Bookmarks</option>

          <option>Comments</option>

          <option>Following</option>
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="-mb-px flex space-x-8">
          <a
            href="#"
            className="border-red-500 text-red-600 whitespace-nowrap pb-4 px-1 border-b-2 font-semibold text-sm"
            aria-current="page"
          >
            Playlists
          </a>

          <a
            href="#"
            className="border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-semibold text-sm"
          >
            Notes
          </a>

          <a
            href="#"
            className="border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-semibold text-sm"
          >
            Bookmarks
          </a>

          <a
            href="#"
            className="border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-semibold text-sm"
          >
            Comments
          </a>

          <a
            href="#"
            className="border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-semibold text-sm"
          >
            Following
          </a>
        </nav>
      </div>
    </div>
  </div>
);

export default Cat;
