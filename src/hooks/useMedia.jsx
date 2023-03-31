import React, { useEffect, useRef, useState } from "react";

/**
 *
 * @param {"audio"|"video"} tag
 */
const useMedia = (tag, elOrProps) => {
  let element;
  let props;

  if (React.isValidElement(elOrProps)) {
    element = elOrProps;
    props = element.props;
  } else {
    props = elOrProps;
  }

  const [state, setState] = useState({
    buffered: [],
    time: 0,
    duration: 0,
    paused: true,
    muted: false,
    volume: 1,
    playing: false,
  });

  const ref = useRef(null);
  const wrapEvent = (userEvent, proxyEvent) => {
    return e => {
      try {
        proxyEvent && proxyEvent(e);
      } finally {
        userEvent && userEvent(e);
      }
    };
  };

  const onPlay = () => setState({ paused: false });
  const onPlaying = () => setState({ playing: true });
  const onWaiting = () => setState({ playing: false });
  const onPause = () => setState({ paused: true, playing: false });
  const onVolumeChange = () => {
    if (!ref?.current) return;
    setState({ muted: ref.current.muted, volume: ref.current.volume });
  };

  const onDurationChange = () => {
    if (!ref?.current) return;
    const { duration, buffered } = ref.current;
    // setState({duration, buffered: })
  };

  const onTimeUpdate = () => {
    if (!ref.current) return;
    setState({ time: ref.current.currentTime });
  };

  const onProgress = () => {
    if (!ref.current) return;
    // setState({buffered:})
  };

  const allProps = {
    controls: false,
    ...props,
    ref,
    onPlay: wrapEvent(props.onPlay, onPlay),
    onPlaying: wrapEvent(props.onPlaying, onPlaying),
    onWaiting: wrapEvent(props.onWaiting, onWaiting),
    onPause: wrapEvent(props.onPause, onPause),
    onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange),
    onDurationChange: wrapEvent(props.onDurationChange, onDurationChange),
    onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate),
    onProgress: wrapEvent(props.onProgress, onProgress),
  };

  element = element ? React.cloneElement(element, allProps) : React.createElement(tag, allProps);
  let lockPlay = false;

  const controls = {
    play: () => {
      if (!ref.current || lockPlay) return undefined;
      const promise = ref.current.play();
      const isPromise = typeof promise === "object";
      if (isPromise) {
        lockPlay = true;
        const resetLock = () => (lockPlay = false);
        promise.then(resetLock, resetLock);
      }
      return promise;
    },

    pause: () => {
      if (!ref.current || lockPlay) return;
      return ref.current.pause();
    },

    seek: time => {
      if (!ref.current || state.duration === undefined) return;
      time = Math.min(state.duration, Math.max(0, time));
      ref.current.currentTime = time;
    },

    volume: volume => {
      if (!ref.current) return;
      volume = Math.min(1, Math.max(0, volume));
      ref.current.volume = volume;
      setState({ volume });
    },

    mute: () => {
      if (!ref.current) return;
      ref.current.muted = true;
    },

    unmute: () => {
      if (!ref.current) return;
      ref.current.muted = false;
    },
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setState({ volume: el.volume, muted: el.muted, paused: el.paused });
    if (props.autoPlay && el.paused) controls.play();
  }, [props.src]);

  return { element, state, controls, ref };
};

export default useMedia;
