import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  FastForwardIcon,
  RewindIcon,
} from "@heroicons/react/solid";
import {
  VolumeUpIcon as VolumeUpIconOutline,
  VolumeOffIcon,
} from "@heroicons/react/outline";
import { VolumeUpIcon } from "@heroicons/react/solid";

import {
  PlayIcon,
  PauseIcon,
  CameraIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/solid";
import { ArrowsExpandIcon } from "@heroicons/react/outline";

import RCSlider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Controls = forwardRef(
  (
    {
      videoTitle,
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      onDuration,
      onRewind,
      onPlayPause,
      onFastForward,
      playing,
      played,
      elapsedTime,
      totalDuration,
      onMute,
      muted,
      onVolumeSeekDown,
      onChangeDispayFormat,
      playbackRate,
      onPlaybackRateChange,
      onToggleFullScreen,
      onTogglePIP,
      volume,
      onVolumeChange,
      onBookmark,
    }: any,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const iconStyles = "h-8 md:w-16 text-white opacity-75";
    const smallIconStyle = "h-6 md:h-10 text-white";

    return (
      <div
        ref={ref}
        style={{
          visibility: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "100%",
          // background: "rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="z-20">
          <div className="grid grid-flow-col space-between w-full p-2 md:p-4">
            <div className="flex flex-row justify-end ">
              <div className="bg-black bg-opacity-30">
                <CameraIcon className={"w-8 text-white"} />
              </div>
              <div className="bg-black bg-opacity-30">
                <PresentationChartBarIcon className={"w-8 text-white"} />
              </div>
            </div>
          </div>

          {/* bottom controls */}
          <div className="bottom-0 absolute w-full bg-black bg-opacity-30 rounded overflow-hidden">
            <div className="px-2 md:px-4 pb-1">
              <RCSlider
                value={played * 100}
                onChange={onSeek}
                onBeforeChange={onSeekMouseDown}
                onAfterChange={onSeekMouseUp}
                trackStyle={{
                  backgroundColor: "#FF0035",
                }}
                railStyle={{
                  backgroundColor: "#FFF7ED",
                }}
                handleStyle={{
                  borderColor: "#FF0035",
                }}
              />
            </div>

            <div className="grid grid-flow-col gap-0 space-between w-full px-2 md:px-4 pb-2">
              <div>
                <div className="flex flex-row gap-2 items-center">
                  <button onClick={onRewind} className="hidden md:block">
                    <RewindIcon fontSize="inherit" className={smallIconStyle} />
                  </button>

                  <button onClick={onPlayPause}>
                    {playing ? (
                      <PauseIcon
                        fontSize="inherit"
                        className={smallIconStyle}
                      />
                    ) : (
                      <PlayIcon fontSize="inherit" className={smallIconStyle} />
                    )}
                  </button>

                  <button onClick={onFastForward} className="hidden md:block">
                    <FastForwardIcon
                      fontSize="inherit"
                      className={smallIconStyle}
                    />
                  </button>

                  <button
                    // onClick={() => setState({ ...state, muted: !state.muted })}
                    onClick={onMute}
                  >
                    {muted ? (
                      <VolumeOffIcon
                        fontSize="large"
                        className={smallIconStyle}
                      />
                    ) : volume > 0.5 ? (
                      <VolumeUpIcon
                        fontSize="large"
                        className={smallIconStyle}
                      />
                    ) : (
                      <VolumeUpIconOutline
                        fontSize="large"
                        className={smallIconStyle}
                      />
                    )}
                  </button>

                  <div className="w-20 hidden sm:block">
                    <RCSlider
                      min={0}
                      max={100}
                      value={muted ? 0 : volume * 100}
                      onChange={onVolumeChange}
                      // vertical
                      aria-labelledby="input-slider"
                      onBeforeChange={onSeekMouseDown}
                      onAfterChange={onVolumeSeekDown}
                      trackStyle={{
                        backgroundColor: "#FF0035",
                      }}
                      railStyle={{
                        backgroundColor: "#FFF7ED",
                      }}
                      handleStyle={{
                        height: "10px",
                        marginTop: "-3px",
                        width: "10px",
                        backgroundColor: "#FF0035",
                        borderColor: "#FF0035",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="items-center justify-end flex flex-row gap-3 md:gap-4 z-50">
                <button onClick={onChangeDispayFormat}>
                  <p className="text-white text-sm md:text-base">
                    {elapsedTime}/{totalDuration}
                  </p>
                </button>

                <button onClick={onTogglePIP}>
                  {/* <ArrowsExpandIcon
                    className={smallIconStyle}
                    fontSize="inherit"
                  /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                    className={smallIconStyle}
                  >
                    <g fill="currentColor">
                      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                      <path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3z" />
                    </g>
                  </svg>
                </button>

                <button onClick={onToggleFullScreen}>
                  <ArrowsExpandIcon
                    className={smallIconStyle}
                    fontSize="inherit"
                  />
                </button>
              </div>

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Controls.displayName = "Controls";

Controls.propTypes = {
  videoTitle: PropTypes.string,
  onSeek: PropTypes.func,
  onSeekMouseDown: PropTypes.func,
  onSeekMouseUp: PropTypes.func,
  onDuration: PropTypes.func,
  onRewind: PropTypes.func,
  onPlayPause: PropTypes.func,
  onFastForward: PropTypes.func,
  onVolumeSeekDown: PropTypes.func,
  onChangeDispayFormat: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onToggleFullScreen: PropTypes.func,
  onTogglePIP: PropTypes.func,
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  elapsedTime: PropTypes.string,
  totalDuration: PropTypes.string,
  muted: PropTypes.bool,
  playbackRate: PropTypes.number,
};
export default Controls;
