import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
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

    const iconStyles = "w-16 text-white opacity-75";
    const smallIconStyle = "h-10 text-white";

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
          <div className="grid grid-flow-col space-between w-full p-4">
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
            <div className="px-4 pb-1">
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

            <div className="grid grid-flow-col gap-0 space-between w-full px-4 pb-2">
              <div>
                <div className="flex flex-row gap-2 items-center">
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
              <div className="items-center justify-end flex flex-row gap-4">
                <button onClick={onChangeDispayFormat}>
                  <p className="text-white font-medium">
                    {elapsedTime}/{totalDuration}
                  </p>
                </button>

                <Menu as="div" className="relative inline-block text-left">
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-bottom-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {[0.5, 1, 1.5, 2].map((rate) => (
                          <Menu.Item key={rate}>
                            {({ active }) => (
                              <button
                                key={rate}
                                //   onClick={() => setState({ ...state, playbackRate: rate })}
                                onClick={() => onPlaybackRateChange(rate)}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                                // variant="text"
                              >
                                <p
                                  color={
                                    rate === playbackRate
                                      ? "secondary"
                                      : "inherit"
                                  }
                                >
                                  {rate}X
                                </p>
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>

                  <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                      {playbackRate}X
                    </Menu.Button>
                  </div>
                </Menu>

                <button onClick={onToggleFullScreen}>
                  <ArrowsExpandIcon
                    className={"h-8 text-white"}
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
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  elapsedTime: PropTypes.string,
  totalDuration: PropTypes.string,
  muted: PropTypes.bool,
  playbackRate: PropTypes.number,
};
export default Controls;
