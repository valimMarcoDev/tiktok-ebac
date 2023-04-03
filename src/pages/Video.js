import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideosFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";
import "./Video.css";
import mp4 from "../pages/midia/piada-animais.mp4";

function Video({likes, messages, shares, name, description, music, url}) {
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
      <VideoSidebar 
      likes={likes}
      messages={messages}
      shares={shares}
      />
      <VideoFooter 
        name={name}
        description={description}
        music={music}
      />      
    </div>
  );
}

export default Video;
