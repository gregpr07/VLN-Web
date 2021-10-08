import Layout from "@components/Layout";

import { useRouter } from "next/router";
import BigMaxer from "@components/BigMaxer";

import React, { useState, useRef, useEffect } from "react";

import ReactPlayer from "react-player";

import screenful from "screenfull";
import Controls from "@components/Controls";
import { formatTime, shorterText } from "@services/functions";
import { tailwindScreens } from "@services/constants";
import { useWindowSize } from "@services/reactFunctions";
import ButtonlessRed from "@components/ButtonLesRed";
import ButtonRed from "@components/ButtonRed";
import { DownloadIcon, PlusIcon } from "@heroicons/react/solid";

const HIDE_CONST = 1; // seconds
const DEBUG_PLAYER = false;

let count = 0;

const lectureData = {
  title: "Principle of Systems Biology illustrated using Virtual Heart",
  description:
    "Praesent pharetra orci in quam congue, vitae maximus sapien vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ultrices convallis fermentum. Aliquam facilisis felis eget lorem facilisis egestas. Nunc congue sodales libero, quis rhoncus tellus eleifend vel. Nulla pretium vehicula mattis.",
  dateRecorded: "Jun 30, 2021",
  datePublished: "Aug 08, 2021",
  views: "12049",
  licenses: ["cc", "cc1", "cc2"],
  author: {
    image: "https://i.ytimg.com/vi/cnBtH7Ph4jk/maxresdefault.jpg",
    name: "Denis Noble",
    institution:
      "Department of Physiology, Anatomy & Genetics, University of Oxford",
  },
};

function Lecture() {
  const router = useRouter();
  const { pid } = router.query;

  const size = useWindowSize();

  const [timeDisplayFormat, setTimeDisplayFormat] = React.useState("normal");
  const [state, setState] = useState({
    pip: false,
    playing: true,
    controls: false,
    light: false,
    muted: true,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    volume: 1,
    loop: false,
    seeking: false,
  });

  const playerRef = useRef<ReactPlayer>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const playerHeight = useRef<HTMLDivElement>(null);
  const controlsRef = useRef(null);

  const { playing, light, muted, playbackRate, pip, played, volume } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleRewind = () => {
    if (!playerRef.current) return;
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleFastForward = () => {
    if (!playerRef.current) return;
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleProgress = (changeState: any) => {
    if (!controlsRef.current) return;
    if (count > HIDE_CONST && !DEBUG_PLAYER) {
      //@ts-ignore
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    }
    //@ts-ignore
    if (controlsRef.current.style.visibility == "visible") {
      count += 1;
    }
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (newValue: number) => {
    console.log({ newValue });
    setState({ ...state, played: newValue / 100 });
  };

  const handleSeekMouseDown = () => {
    setState({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (newValue: number) => {
    if (!playerRef.current) return;
    console.log({ value: newValue });
    setState({ ...state, seeking: false });
    // console.log(sliderRef.current.value)
    playerRef.current.seekTo(newValue / 100, "fraction");
  };

  const handleDuration = (duration: number) => {
    setState({ ...state, duration });
  };

  const handleVolumeSeekDown = (newValue: number) => {
    setState({ ...state, seeking: false, volume: newValue / 100 });
  };
  const handleVolumeChange = (newValue: number) => {
    // console.log(newValue);
    setState({
      ...state,
      volume: newValue / 100,
      muted: newValue === 0 ? true : false,
    });
  };

  const toggleFullScreen = () => {
    if (
      !screenful.isEnabled ||
      !playerRef.current ||
      !playerContainerRef.current
    )
      return;

    // @ts-ignore
    screenful
      .toggle(playerContainerRef.current)
      .then(() => console.log(screenful.isEnabled));

    //   const videoElem = playerRef.current.getInternalPlayer();

    //   videoElem.webkitEnterFullscreen();

    // let fnEnter =
    //   videoElem.requestFullscreen ||
    //   videoElem.webkitRequestFullscreen ||
    //   videoElem.mozRequestFullScreen ||
    //   videoElem.oRequestFullscreen ||
    //   videoElem.msRequestFullscreen;

    // fnEnter.call(videoElem);
  };

  const togglePip = () => {
    setState({ ...state, pip: !state.pip });
  };

  const handleMouseMove = () => {
    if (!controlsRef.current) return;
    console.log("mousemove");
    //@ts-ignore
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const hanldeMouseLeave = () => {
    if (!controlsRef.current) return;
    // controlsRef.current.style.visibility = "hidden";
    count = 0;
  };

  const handleDisplayFormat = () => {
    setTimeDisplayFormat(
      timeDisplayFormat == "normal" ? "remaining" : "normal"
    );
  };

  const handlePlaybackRate = (rate: number) => {
    setState({ ...state, playbackRate: rate });
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  const currentTime =
    playerRef && playerRef.current ? playerRef.current.getCurrentTime() : 0;

  const duration =
    playerRef && playerRef.current ? playerRef.current.getDuration() : 0;
  const elapsedTime =
    timeDisplayFormat == "normal"
      ? formatTime(currentTime)
      : `-${formatTime(duration - currentTime)}`;

  const totalDuration = formatTime(duration);

  //! move this to components
  // interface Note {
  //   timestamp: string;
  //   note: string;
  //   id: string;
  // }
  // const Notes = ({ notes }: { notes: Note[] }) => <div></div>;

  return (
    <Layout title="Lecture | XYZ" useMaxer={false}>
      <BigMaxer>
        <div className="sm:px-6 lg:px-8 md:pt-8">
          <div className="">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={hanldeMouseLeave}
              ref={playerContainerRef}
              className={"relative w-full bg-black"}
            >
              <div
                ref={playerHeight}
                className="absolute w-full z-10 cursor-pointer"
                onClick={() =>
                  size.width > tailwindScreens.sm && handlePlayPause()
                }
              >
                <ReactPlayer
                  ref={playerRef}
                  width="100%"
                  height="100%"
                  url="http://hydro.ijs.si/v018/f1/6hccwsarokqsxi3gdhbjjdec77ead2ob.mp4"
                  pip={pip}
                  playing={playing}
                  controls={size.width < tailwindScreens.sm}
                  light={light}
                  playsinline
                  // loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  style={{ borderRadius: "0.25rem", overflow: "hidden" }}
                  onProgress={handleProgress}
                  config={
                    {
                      // file: {
                      //   attributes: {
                      //     crossorigin: "anonymous",
                      //   },
                      // },
                    }
                  }
                />
              </div>
              <div
                style={
                  playerHeight.current
                    ? { height: playerHeight.current.clientHeight }
                    : { display: "none" }
                }
              >
                <Controls
                  show={size.width > tailwindScreens.sm}
                  ref={controlsRef}
                  onSeek={handleSeekChange}
                  onSeekMouseDown={handleSeekMouseDown}
                  onSeekMouseUp={handleSeekMouseUp}
                  onDuration={handleDuration}
                  onRewind={handleRewind}
                  onPlayPause={handlePlayPause}
                  onFastForward={handleFastForward}
                  playing={playing}
                  played={played}
                  elapsedTime={elapsedTime}
                  totalDuration={totalDuration}
                  onMute={hanldeMute}
                  muted={muted}
                  onVolumeChange={handleVolumeChange}
                  onVolumeSeekDown={handleVolumeSeekDown}
                  onChangeDispayFormat={handleDisplayFormat}
                  playbackRate={playbackRate}
                  onPlaybackRateChange={handlePlaybackRate}
                  onToggleFullScreen={toggleFullScreen}
                  onTogglePIP={togglePip}
                  volume={volume}
                  // onBookmark={addBookmark}
                />
              </div>
            </div>
          </div>
        </div>
        {/* below video */}
        <div className="p-4 sm:p-6 lg:p-8">
          <h3 className="text-lg leading-6 font-bold text-gray-900">
            {lectureData.title}
          </h3>
          <div className="flex flex-wrap text-gray-500 font-normal leading-4 gap-1 ">
            <p className="text-xs leading-4 font-normal text-gray-500">
              Recorded on {lectureData.datePublished}
            </p>
            <p className="text-xs leading-4 font-normal text-gray-500">
              &middot;
            </p>
            <p className="text-xs leading-4 font-normal text-gray-500">
              Published on {lectureData.dateRecorded}
            </p>
            <p className="text-xs leading-4 font-normal text-gray-500">
              &middot;
            </p>
            <p className="text-xs leading-4 font-normal text-gray-500">
              {lectureData.views} views
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 lg:hidden" />

        {/* Author */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="rounded-md grid grid-flow-col gap-5 justify-start">
            <div className="flex-grow">
              <img
                className="object-cover shadow-lg rounded-full h-10 w-10"
                src={lectureData.author.image}
                alt=""
              />
            </div>
            <div className="text-xs">
              <h4 className="leading-4 text-gray-900 font-semibold pb-1">
                {lectureData.author.name}
              </h4>

              <p className="text-gray-500 text-xs leading-4 font-normal max-w-xl">
                {lectureData.author.institution}
              </p>
            </div>
          </div>
          <div className="pt-4">
            <p className="text-sm leading-5 font-normal text-gray-500 max-w-xl">
              {shorterText(lectureData.description, 100)}
            </p>
            <ButtonlessRed className="pt-4">Read More</ButtonlessRed>

            <div className="py-10 flex flex-row gap-6 lg:gap-4 items-center lg:items-start lg:flex-col lg:w-44">
              <div className="sm:flex-grow">
                <ButtonRed
                  className="lg:w-44 lg:flex lg:justify-center items-center"
                  Icon={DownloadIcon}
                  text="Download"
                />
              </div>
              <div>
                <div className="flex flex-row gap-4 pt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </BigMaxer>
    </Layout>
  );
}

export default Lecture;
