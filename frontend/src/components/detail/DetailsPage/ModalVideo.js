import "./Video.css";

import React, { useState } from "react";
import ModalVideo from "react-modal-video";

function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <div className="" onClick={() => setOpen(true)}>
        <img src={require("../../../assets/hero/project-hero.jpg").default}/>
      </div>
    </React.Fragment>
  );
}

export default Video;
