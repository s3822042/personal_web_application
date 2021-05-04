import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Rocket from "../Animations/Rocket";

const FirstRowContent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="items-center flex flex-col md:flex-row">
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-4">
            <div className="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <FontAwesomeIcon className="text-xl" icon={faRocket} />
            </div>
            <h3 className="text-3xl font-semibold">About me</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Request a job and have your service done in a matter of hours and
              not days.
            </p>
          </div>
        </div>
        <div className="w-full md:w-4/12 mr-auto px-4 md:pt-0 my-0">
          <Rocket />
        </div>
      </div>
    </div>
  );
};

export default FirstRowContent;
