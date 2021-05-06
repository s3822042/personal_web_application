import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Rocket from "../animation/Rocket";

function FirstRowContent() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
          <div className="md:pr-4">
            <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-red-600 bg-white rounded-full shadow-lg">
              <FontAwesomeIcon className="text-xl" icon={faRocket} />
            </div>
            <h3 className="text-3xl font-semibold">About me</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Request a job and have your service done in a matter of hours and
              not days.
            </p>
          </div>
        </div>
        <div className="w-full px-4 my-0 mr-auto md:w-4/12 md:pt-0">
          <Rocket />
        </div>
      </div>
    </div>
  );
}

export default FirstRowContent;
