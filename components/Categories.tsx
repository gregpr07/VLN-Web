import React, { useState } from "react";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const categories = ["Playlists", "Notes", "Bookmarks", "Comments", "Following"];

const Cat = () => {
  const [activeCat, setActiveCat] = useState(categories[0]);
  return (
    <div className="pb-4 sm:border-b sm:border-gray-200 sm:pb-0 md:pt-4 w-full">
      <div className="mt-3 sm:mt-4">
        {/* Mobile */}
        <Menu as="div" className=" inline-block text-left sm:hidden z-50">
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md  shadow-sm px-4 py-2 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-50500">
              Categories
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5 mt-0.5"
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
            <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="py-1">
                {categories.map((cat, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
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

        {/* For desktop */}
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {categories.map((cat, index) => (
              <a
                onClick={() => setActiveCat(cat)}
                className={
                  cat === activeCat
                    ? "border-red-500 text-red-600 whitespace-nowrap pb-4 px-1 border-b-2 font-semibold text-sm"
                    : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-semibold text-sm" +
                      " cursor-pointer"
                }
                aria-current="page"
                key={index}
              >
                {cat}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Cat;
