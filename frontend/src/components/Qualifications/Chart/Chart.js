import React from "react";
import WebIcon from "@material-ui/icons/Web";

import PieChart from "./PieChart";

function Chart() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
          <WebIcon />
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Technologies used
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          In order to create a great User Experience some components require
          JavaScript. In this way you can manipulate the elements on the page
          and give more options to your users.
        </p>
      </div>
      <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
        <PieChart />
      </div>
    </div>
  );
}

export default Chart;
