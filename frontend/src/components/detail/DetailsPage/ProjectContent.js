import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Video from "./ModalVideo";

function ProjectContent() {
  return (
    <div className="container max-w-5xl mx-auto">
      <div className="mx-0 sm:mx-6">
        <div className="w-full p-6 text-xl leading-normal text-darker md:p-24 md:text-2xl">
          <p className="mb-5 text-2xl text-justify md:text-3xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="py-10">
            <img
              src={require("../../../assets/hero/project-hero.jpg").default}
            />
          </div>
          {/* Video slider */}
          <div className="w-full">
            <Video />
          </div>

          {/* Button */}
          <div className="flex justify-end mx-auto text-xs uppercase text-darker">
            <Link to="/project">
              <div className="flex items-center justify-between">
                <HiOutlineArrowNarrowLeft />
                <p className="pl-1">Back to projects</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectContent;
