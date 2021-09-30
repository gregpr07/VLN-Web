import Link from "next/link";
import Layout from "@components/Layout";
import { SearchIcon } from "@heroicons/react/solid";
import Maxer from "@components/BigMaxer";

const IndexPage = () => (
  <Layout title="Home | VideoLectures" useNavigation={false}>
    <div
      className={
        "px-4 sm:px-6 lg:px-8 pt-24 md:pt-8 lg:pt-12 text-xs bg-red-600 " +
        "lg:max-h-44 md:text-sm"
      }
    >
      <div className="pb-4 sm:pb-8 md:pb-4">
        <Maxer>
          <div className="">
            <h1 className="text-2xl leading-8 font-extrabold text-white">
              Exchange ideas. Share your knowledge.
            </h1>
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
        </Maxer>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
