import ReactPlayer from "react-player";
import { useState, useRef, useEffect } from "react";

import Layout from "@components/Layout";

import { useRouter } from "next/router";
import BigMaxer from "@components/BigMaxer";

let player: ReactPlayer;

const Lecture = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout title="Lecture | XYZ" useMaxer={false}>
      <BigMaxer>
        <div className="md:grid md:grid-cols-2 gap-0">
          <div className="">
            <ReactPlayer
              // ref={(playerRef: HTMLVideoElement) => {
              //   player = playerRef;
              // }}
              height="100%"
              width="100%"
              // playsInline
              poster="http://hydro.ijs.si/v000/99/tesk7ee4zpchypmkcljjw6zfjpvdedex.jpg"
              src="http://hydro.ijs.si/v01d/fe/73mjghmj3ue6tcnhtrptzpmk7kdneifq.mp4"
              fluid
            />
          </div>
          <div className="">
            <div className="align-middle justify-center h-full flex">
              <img
                className="my-aut"
                src="http://hydro.ijs.si/2009/tao/taoiw09_paris/pariente_semintro/taoiw09_pariente_semintro_01.zip.slides/TAO_Workshop_Semantic-Web-An-introduction-2009-01-27_Page_35.jpg"
              />
            </div>
          </div>
          <div className="col-span-2 text-center bg-gray-100 py-3"></div>
        </div>
      </BigMaxer>
    </Layout>
  );
};

export default Lecture;
