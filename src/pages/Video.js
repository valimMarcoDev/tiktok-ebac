import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideosFooter";
import "./Video.css";
import mp4 from "../pages/midia/piada-animais.mp4";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={mp4}
      ></video>
      {/* Side bat */}
      <VideoFooter />
    </div>
  );
}

export default Video;
