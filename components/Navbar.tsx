import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

import { useState } from "react";

import { connect } from "react-redux";
import { removeToken } from "../services/storage/actions";

import Link from "next/link";
import { useRouter } from "next/router";
import ButtonRed from "./ButtonRed";
import ButtonlessRed from "./ButtonLesRed";
import Maxer from "./Maxer";

const user = {
  name: "Chelsea Hagon",
  email: "chelseahagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Teams", href: "#", current: false },
  { name: "Directory", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({
  token,
  rmToken,
  redBG = false,
  showSearch = true,
  sticky = true,
}) => {
  const handleLogout = (e: any) => {
    e.preventDefault();
    rmToken();
  };
  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            " shadow-sm md:static md:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div
              className={
                "fixed max-w-none mx-auto px-4 sm:px-6 lg:px-8 shadow w-full z-40 " +
                (redBG ? "bg-red-600" : "bg-white")
              }
            >
              <div className="max-w-7xl mx-auto lg:px-6 ">
                <div className="relative flex justify-between lg:gap-8">
                  <div className="flex md:left-0 md:inset-y-0 md:static md:col-span-2">
                    <div className="flex-shrink-0 flex items-center">
                      <Link href="/">
                        <a>
                          <img
                            className="block lg:hidden h-8 w-auto"
                            src="/images/logo.png"
                            alt="Workflow"
                          />
                          <img
                            className="lg:block hidden h-8 w-auto"
                            src="/images/logo-wide-dark.png"
                            alt="Workflow"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  {showSearch && (
                    <div className="min-w-0 flex-1 md:px-8 lg:px-0 flex-grow max-w-2xl">
                      <div className="flex items-center px-6 py-2 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                        <div className="w-full">
                          <label htmlFor="search" className="sr-only">
                            Search
                          </label>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                              <SearchIcon
                                className="h-5 w-5 text-gray-400 text-sm font-medium"
                                aria-hidden="true"
                              />
                            </div>
                            <input
                              id="search"
                              name="search"
                              className="block h-10 w-full border-none bg-gray-50 rounded-md py-3 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-red-600 sm:text-sm"
                              placeholder="Search"
                              type="search"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div
                    className={
                      "flex items-center md:right-0 md:inset-y-0 md:hidden flex-grow-0" +
                      (redBG ? " bg-red-600" : "")
                    }
                  >
                    {/* Mobile menu button */}
                    <Popover.Button
                      className={
                        "-mx-2 my-2 rounded-md p-2 inline-flex items-center border-2 justify-center " +
                        (redBG
                          ? " text-white hover:text-gray-100 hover:border-gray-100"
                          : "bg-gray-50 text-gray-500 hover:text-gray-600 border-none")
                      }
                    >
                      <span className="sr-only">Open menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Popover.Button>
                  </div>

                  {/* menu */}
                  {token ? (
                    <div className="hidden md:flex md:items-center md:justify-end lg:col-span-4">
                      <a
                        href="#"
                        className="ml-5 flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </a>

                      {/* Profile dropdown */}
                      <Menu as="div" className="flex-shrink-0 relative ml-5">
                        {({ open }) => (
                          <>
                            <div>
                              <Menu.Button className="rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              show={open}
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items
                                static
                                className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
                              >
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block py-2 px-4 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      onClick={handleLogout}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block py-2 px-4 text-sm text-gray-700 cursor-pointer"
                                      )}
                                    >
                                      Log out
                                    </a>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </>
                        )}
                      </Menu>
                    </div>
                  ) : (
                    <div className="hidden md:flex items-center justify-start">
                      <Link href="login">
                        <a className="whitespace-nowrap text-base content-center font-medium text-gray-500 hover:text-gray-900">
                          <ButtonlessRed
                            textColor={redBG ? "text-gray-100" : ""}
                          >
                            Sign in
                          </ButtonlessRed>
                        </a>
                      </Link>
                      <a
                        href="#"
                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white "
                      >
                        <ButtonRed
                          text="Sign up"
                          className={
                            redBG
                              ? "border-2 rounded"
                              : "border-2 border-transparent"
                          }
                        />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="md:hidden" aria-label="Global">
              <div
                className={
                  "max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4 z-50 " +
                  (redBG ? " bg-red-600" : "bg-white")
                }
              >
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-gray-50",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}

                {token ? (
                  <div className="border-t border-gray-200 pt-4 pb-3">
                    <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                      {userNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      ))}
                      <a
                        onClick={handleLogout}
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                      >
                        Log out
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-left pl-7 md:flex-1 md:w-0">
                    <Link href="login">
                      <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                        Sign in
                      </a>
                    </Link>
                    <a
                      href="#"
                      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </a>
                  </div>
                )}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
};

const mapStateToProps = (state) => ({
  token: state.token.token,
});

const mapDispatchToProps = (dispatch) => ({
  rmToken: () => dispatch(removeToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
