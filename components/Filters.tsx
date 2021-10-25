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
import Lectures from "@components/Lectures";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const cateogories = ["Lectures", "Events", "Hands On"];
const sorts = ["Alphabet", "Date", "Views"];

const Filters = () => (
  <div className="grid grid-flow-col py-4 items-stretch">
    <div className="flex-grow">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex h-10 justify-center w-full rounded-md px-4 py-2 bg-gray-50 text-sm font-medium text-gray-800 hover:bg-gray-50 ring-none">
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
              {cateogories.map((cat) => (
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
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

export default Filters;
