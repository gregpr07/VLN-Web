import Layout from "@components/Layout";

import { useRouter } from "next/router";
import BigMaxer from "@components/BigMaxer";

import React, { useState, useRef, useEffect } from "react";

import ReactPlayer from "react-player";

import screenful from "screenfull";
import Controls from "@components/Controls";
import { compare, formatTime, shorterText } from "@services/functions";
import { tailwindScreens } from "@services/constants";
import { useWindowSize } from "@services/reactFunctions";
import ButtonlessRed from "@components/ButtonLesRed";
import ButtonRed from "@components/ButtonRed";
import { DownloadIcon, PlusIcon } from "@heroicons/react/solid";
import Maxer from "@components/BigMaxer";
import Notes from "@components/Notes";
import ReadMore from "@components/ReadMore";

import Image from "next/image";

const HIDE_CONST = 1; // seconds
const DEBUG_PLAYER = false;

let count = 0;
let alreadyForced = false;

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
  videoUrl:
    "http://hydro.videolectures.net/v017/3d/huyzwd3aarzg53dy3hofyvf7ea6wjfyt.mp4",
  slides: [
    {
      id: 462043,
      timestamp: 0,
      image:
        "http://hydro.videolectures.net/v017/d1/2ew76uvyk3tm4t7dd47lqikekekcai4h.jpg",
      title: "Preparing Multi-Modal Data for Natural Language Processing",
      lecture: 27799,
    },
    {
      id: 462044,
      timestamp: 21327,
      image:
        "http://hydro.videolectures.net/v017/e9/5eyfsz4kres7vl447yh3a3ykd7bmdhc4.jpg",
      title: "Introduction",
      lecture: 27799,
    },
    {
      id: 462045,
      timestamp: 126413,
      image:
        "http://hydro.videolectures.net/v017/8b/rnsej75ym7ciw7752i7bftym4wkbn36g.jpg",
      title: "Outline",
      lecture: 27799,
    },
    {
      id: 462046,
      timestamp: 165153,
      image:
        "http://hydro.videolectures.net/v017/26/e3ocwttfl6qggggnonhpbvgfy5gpeykt.jpg",
      title: "Pre-processing Pipeline - 1",
      lecture: 27799,
    },
    {
      id: 462047,
      timestamp: 198836,
      image:
        "http://hydro.videolectures.net/v017/51/khy2sioiymujllfxj4qbfjicsmoowtjl.jpg",
      title: "Pre-processing Pipeline - 2",
      lecture: 27799,
    },
    {
      id: 462048,
      timestamp: 253759,
      image:
        "http://hydro.videolectures.net/v017/54/krb5jlsjue3gtb572el5idwohosxejfx.jpg",
      title: "Pre-processing Pipeline - 3",
      lecture: 27799,
    },
    {
      id: 462049,
      timestamp: 305348,
      image:
        "http://hydro.videolectures.net/v017/f0/6aruoneo7h2bf3bxknhj62vekfupovqo.jpg",
      title: "Pre-processing Pipeline - 4",
      lecture: 27799,
    },
    {
      id: 462050,
      timestamp: 421394,
      image:
        "http://hydro.videolectures.net/v017/11/cenatbstt23xiaaslf3nhe6agqjxtjos.jpg",
      title: "Pre-processing Pipeline - 5",
      lecture: 27799,
    },
    {
      id: 462051,
      timestamp: 521716,
      image:
        "http://hydro.videolectures.net/v017/94/stol244yx5mxc2mznwjq6smba4vin7yv.jpg",
      title: "Data Statistic - 1",
      lecture: 27799,
    },
    {
      id: 462052,
      timestamp: 571210,
      image:
        "http://hydro.videolectures.net/v017/3a/hk43c24riomjsaycxsm2xkuvcpk5zhv4.jpg",
      title: "Data Statistic - 2",
      lecture: 27799,
    },
    {
      id: 462053,
      timestamp: 621359,
      image:
        "http://hydro.videolectures.net/v017/51/khnmdpmwuvtizbrxpocq6oq2p73a4e66.jpg",
      title: "Application: Recommender Engine",
      lecture: 27799,
    },
    {
      id: 462054,
      timestamp: 711479,
      image:
        "http://hydro.videolectures.net/v017/aa/vj24dxluv62b6ag2jii7a2teyrrfqbru.jpg",
      title: "Conclusion",
      lecture: 27799,
    },
  ],
};

const sampleNotes = [
  {
    timestamp: 1235,
    note: "Cras ac nibh rhoncus, sagittis purus eget, posuere magna. Aenean tempus ornare augue vel blandit. Maecenas dolor nibh, consequat vel lorem a, accumsan pellentesque nulla. Sed ornare justo ut mi sodales sagittis. In finibus consectetur auctor. Aliquam erat volutpat. Aliquam ac sem dictum, tincidunt justo in, condimentum sapien.",
    id: 112,
  },
  {
    timestamp: 566,
    note: "Neque aliquam vestibulum morbi blandit cursus risus at. Tristique senectus et netus et. Enim ut tellus elementum sagittis.",
    id: 551,
  },
];

const SectionDiv = ({ children, title, className = "" }) => (
  <Maxer>
    <div className={"py-8 px-4 sm:px-6 lg:px-8" + className}>
      <div className="grid grid-flow-col col-span-2 items-center space-between w-full pb-6">
        <div>
          <h1 className="text-2xl leading-8 font-extrabold">{title}</h1>
        </div>
      </div>

      {children}
    </div>
  </Maxer>
);
export type viewAvailable = "video" | "video-slides" | "slides";

function Lecture() {
  const router = useRouter();
  const { pid } = router.query;

  // slides
  // const [showSlides, setShowSlides] = useState(true);
  const [currentView, setCurrentView] = useState<viewAvailable>("video-slides");

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

  /* View toggle */
  const toggleView = (view: viewAvailable) => {
    console.log("toggled view", view);
    setCurrentView(view);
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

  const handleMute = () => {
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

  const getCurrentSlideImage = (
    slides: typeof lectureData.slides,
    currentTime: number
  ) => {
    if (slides) {
      const newslides = slides
        ? slides.sort(compare).filter((slide) => slide.timestamp < currentTime)
        : [];
      if (!newslides.length) {
        return "";
      }
      if (slides.length >= newslides.length)
        return slides[newslides.length - 1].image;
    }
  };

  //! CHROME BLOCKS THIS!!
  // const autoPlay = () => {
  //   if (!alreadyForced) {
  //     handleMute();
  //     alreadyForced = true;
  //   }
  // };

  return (
    <Layout title="Lecture | XYZ" useMaxer={false} /* onMouseMove={autoPlay} */>
      <BigMaxer>
        <div className="sm:px-6 lg:px-8 md:pt-8 sm:pt-4">
          <div className="">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={hanldeMouseLeave}
              ref={playerContainerRef}
              className={"relative w-full rounded-lg flex items-center"}
            >
              <div
                className="absolute w-full z-10 cursor-pointer"
                onClick={() =>
                  size.width > tailwindScreens.sm && handlePlayPause()
                }
              >
                <div className="grid grid-flow-col">
                  <div className="flex-grow" ref={playerHeight}>
                    <ReactPlayer
                      ref={playerRef}
                      width="100%"
                      height="100%"
                      url={lectureData.videoUrl}
                      pip={pip}
                      playing={playing}
                      controls={size.width < tailwindScreens.sm}
                      light={light}
                      playsinline
                      // loop={loop}
                      playbackRate={playbackRate}
                      volume={volume}
                      muted={muted}
                      style={{
                        borderRadius: "0.5rem",
                        overflow: "hidden",
                        borderTopRightRadius:
                          currentView === "video-slides" ? "0" : "0.5rem",
                        borderBottomRightRadius:
                          currentView === "video-slides" ? "0" : "0.5rem",
                      }}
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

                  {(currentView == "video-slides" ||
                    currentView == "slides") && (
                    <div className="flex-shrink">
                      <img
                        // loader={myLoader}
                        src={getCurrentSlideImage(
                          lectureData.slides,
                          currentTime * 1000
                        )}
                        className="h-full bg-white"
                        alt="Slides"
                        // width={playerHeight.current.}
                        // width={playerHeight.current.clientWidth / 2}
                        // height={playerHeight.current.clientHeight}
                        // // layout="intrinsic"
                      />
                    </div>
                  )}
                </div>
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
                  toggleView={toggleView}
                  currentView={currentView}
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
                  onMute={handleMute}
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
              <ReadMore text={lectureData.description} shorterLength={100} />
            </p>

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
      {/* Notes */}
      <SectionDiv title="Notes">
        <Notes notes={sampleNotes} />
      </SectionDiv>
    </Layout>
  );
}

export default Lecture;
