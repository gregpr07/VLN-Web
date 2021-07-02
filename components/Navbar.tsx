import { useState } from "react";

import { connect } from "react-redux";
import { removeToken } from "../services/storage/actions";

import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ token, rmToken }) => {
  const router = useRouter();

  const [burgerOpen, setBurgerOpen] = useState(false);
  const [accMenu, setAccMenu] = useState(false);
  const [notificationsMenu, setNotificationsMenu] = useState(false);

  const handleLogout = (e: any) => {
    e.preventDefault();
    rmToken();
  };

  const links = [
    {
      name: "About",
      link: "/",
    },
  ];

  return (
    <div>
      <nav className="bg-white dark:bg-gray-800  shadow ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <Link href="/">
                <a className="flex-shrink-0">
                  <img
                    className="h-16 w-16"
                    src="/images/logo.png"
                    alt="Workflow"
                  />
                </a>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {links.map((link) => (
                    <Link href={link.link}>
                      <a
                        className={
                          "hover:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium " +
                          (link.link === router.pathname
                            ? "text-gray-500"
                            : "text-gray-300")
                        }
                        href="/#"
                      >
                        {link.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {token ? (
              <div className="block">
                <div className="ml-4 flex items-center md:ml-6">
                  <div className="ml-3 relative">
                    <button
                      onClick={() => setNotificationsMenu(!notificationsMenu)}
                      className="rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                    >
                      <span className="sr-only">View notifications</span>
                      {/* Heroicon name: outline/bell */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </button>

                    {notificationsMenu && (
                      <div className="origin-top-right absolute right-10 mt-2 w-60 md:w-80 p-4 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                        <div className="w-full flex items-center justify-between mb-8">
                          <p className="text-gray-800 dark:text-white text-xl font-normal">
                            Activity
                          </p>
                          <a
                            href="#"
                            className="flex items-center text-sm hover:text-gray-600 dark:text-gray-50 dark:hover:text-white text-gray-300 border-0 focus:outline-none"
                          >
                            VIEW ALL
                          </a>
                        </div>
                        <div className="flex items-start mb-6 rounded justify-between">
                          <span className="rounded-full text-white dark:text-gray-800 p-2 bg-yellow-300">
                            <svg
                              width={20}
                              height={20}
                              fill="currentColor"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-128-448v320h-1024v-192l192-192 128 128 384-384zm-832-192q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z"></path>
                            </svg>
                          </span>
                          <div className="flex items-center w-full justify-between">
                            <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                              <p className="text-gray-700 dark:text-white">
                                <span className="font-bold mr-1">Andrea</span>
                                uploaded 3 documents on concept deisgn home page
                              </p>
                              <p className="text-gray-300">Aug 10</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start mb-6 rounded justify-between">
                          <span className="rounded-full text-white dark:text-gray-800 p-2 bg-green-400">
                            <svg
                              width={20}
                              height={20}
                              fill="currentColor"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"></path>
                            </svg>
                          </span>
                          <div className="flex items-center w-full justify-between">
                            <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                              <p className="text-gray-700 dark:text-white">
                                <span className="font-bold mr-1">Karen</span>
                                leave some comments on concept deisgn support
                                page
                              </p>
                              <p className="text-gray-300">Aug 10</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start mb-6 rounded justify-between">
                          <span className="rounded-full text-white dark:text-gray-800 p-2 bg-indigo-400">
                            <svg
                              width={20}
                              height={20}
                              fill="currentColor"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"></path>
                            </svg>
                          </span>
                          <div className="flex items-center w-full justify-between">
                            <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                              <p className="text-gray-700 dark:text-white">
                                <span className="font-bold mr-1">Karen</span>
                                change project description to "SubMarine
                                protection project"
                              </p>
                              <p className="text-gray-300">Aug 09</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start rounded justify-between">
                          <span className="rounded-full text-white dark:text-gray-800 p-2 bg-yellow-300">
                            <svg
                              width={20}
                              height={20}
                              fill="currentColor"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-128-448v320h-1024v-192l192-192 128 128 384-384zm-832-192q-80 0-136-56t-56-136 56-136 136-56 136 56 56 136-56 136-136 56z"></path>
                            </svg>
                          </span>
                          <div className="flex items-center w-full justify-between">
                            <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                              <p className="text-gray-700 dark:text-white">
                                <span className="font-bold mr-1">John</span>
                                uploaded 17 pictures on concept deisgn galery
                                page
                              </p>
                              <p className="text-gray-300">Aug 1</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="relative inline-block text-left">
                      <div>
                        <button
                          type="button"
                          className="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                          id="options-menu"
                          onClick={() => setAccMenu(!accMenu)}
                        >
                          <svg
                            width={20}
                            fill="currentColor"
                            height={20}
                            className="text-gray-800"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                          </svg>
                        </button>
                      </div>
                      {accMenu && (
                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                          <div
                            className="py-1 "
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <a
                              href="#"
                              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                              role="menuitem"
                            >
                              <span className="flex flex-col">
                                <span>Settings</span>
                              </span>
                            </a>

                            <a
                              href="#"
                              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                              role="menuitem"
                            >
                              <span className="flex flex-col">
                                <span>Account</span>
                              </span>
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                              role="menuitem"
                              onClick={handleLogout}
                            >
                              <span className="flex flex-col">
                                <span>Logout</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/login">
                    <a
                      className="text-black-600 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      role="menuitem"
                    >
                      <span className="flex flex-col">
                        <span>Login</span>
                      </span>
                    </a>
                  </Link>
                  <Link href="/register">
                    <a
                      className="text-purple-600 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      role="menuitem"
                    >
                      <span className="flex flex-col">
                        <span>Register</span>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            )}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setBurgerOpen(!burgerOpen)}
                className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                <svg
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {burgerOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link href={link.link}>
                  <a
                    className={
                      "text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium " +
                      (link.link === router.pathname
                        ? "text-gray-500"
                        : "text-gray-300")
                    }
                    href="/#"
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.token.token,
});

const mapDispatchToProps = (dispatch) => ({
  rmToken: () => dispatch(removeToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
