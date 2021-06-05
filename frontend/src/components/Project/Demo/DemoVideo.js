import React from "react";

function DemoVideo(props) {
  return (
    <div className="p-1 lg:w-1/3">
      <div className="relative flex">
        <img
          alt="gallery"
          className="absolute inset-0 object-cover object-center w-full h-full"
          src={props.img}
        />
        <div className="relative z-10 w-full px-8 py-10 transition duration-500 transform bg-white border border-gray-200 opacity-0 hover:scale-125 hover:opacity-100">
          <iframe
            className="absolute inset-0 object-cover object-center w-full h-full"
            src={props.videoURL}
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          ></iframe>
          <div className="h-40"></div>
        </div>
      </div>
    </div>
  );
}

export default DemoVideo;
