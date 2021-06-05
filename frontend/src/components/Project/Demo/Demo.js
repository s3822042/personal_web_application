import React from "react";
import DemoVideo from "./DemoVideo";

function Demo() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <DemoVideo
            img={
              "https://www.webtekno.com/images/editor/default/0001/98/6989608967a2f04b240670471d58b43757ec0b24.jpeg"
            }
            videoURL={
              "https://www.youtube.com/embed/qKqj85oo2wI?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
            }
          />
          <DemoVideo
            img={
              "https://www.webtekno.com/images/editor/default/0001/98/6989608967a2f04b240670471d58b43757ec0b24.jpeg"
            }
            videoURL={
              "https://www.youtube.com/embed/qKqj85oo2wI?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
            }
          />
          <DemoVideo
            img={
              "https://www.webtekno.com/images/editor/default/0001/98/6989608967a2f04b240670471d58b43757ec0b24.jpeg"
            }
            videoURL={
              "https://www.youtube.com/embed/qKqj85oo2wI?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Demo;
