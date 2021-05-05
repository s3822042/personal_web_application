import React from "react";
import ExploreIcon from "@material-ui/icons/Explore";

const TechSKill = () => {
  return (
    <div className="flex flex-wrap items-center pt-32">
      <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
        <div className="justify-center flex flex-wrap relative">
          <div className="my-4 w-full lg:w-6/12 px-4">
            <a href="#" target="_blank" rel="noreferrer">
              <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                <img
                  alt="svelte"
                  className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src={require("../../../assets/skill/svelte.jpg").default}
                />
                <p className="text-lg text-white mt-4 font-semibold">Svelte</p>
              </div>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                <img
                  alt="..."
                  className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src={require("../../../assets/skill/react.jpg").default}
                />
                <p className="text-lg text-white mt-4 font-semibold">ReactJS</p>
              </div>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                <img
                  alt="..."
                  className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src={require("../../../assets/skill/nextjs.jpg").default}
                />
                <p className="text-lg text-white mt-4 font-semibold">NextJS</p>
              </div>
            </a>
          </div>
          <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
            <a href="" target="_blank" rel="noreferrer">
              <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                <img
                  alt="..."
                  className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src={require("../../../assets/skill/js.png").default}
                />
                <p className="text-lg text-white mt-4 font-semibold">
                  JavaScript
                </p>
              </div>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                <img
                  alt="..."
                  className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src={require("../../../assets/skill/angular.jpg").default}
                />
                <p className="text-lg text-white mt-4 font-semibold">Angular</p>
              </div>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                <img
                  alt="..."
                  className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                  src={require("../../../assets/skill/vue.jpg").default}
                />
                <p className="text-lg text-white mt-4 font-semibold">Vue.js</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
          <ExploreIcon  />
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Javascript Frameworks
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          In order to create a great User Experience some components require
          JavaScript. In this way you can manipulate the elements on the page
          and give more options to your users.
        </p>
      </div>
    </div>
  );
};

export default TechSKill;
