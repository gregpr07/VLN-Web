import React, { ReactNode } from "react";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Cat = () => (
  <div className="pb-4 border-b border-gray-200 sm:pb-0 md:pt-4">
    <div className="mt-3 sm:mt-4">
      {/* Mobile */}
      <Menu as="div" className=" inline-block text-left sm:hidden z-50">
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            Catagories
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
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
          <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Playlists
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Notes
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Bookmarks
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Comments
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Following
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* For desktop */}
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
