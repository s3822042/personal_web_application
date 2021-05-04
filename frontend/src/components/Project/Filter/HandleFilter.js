import React from "react";
import "./Filter.css";


function HandleFilter () {

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="items-center flex flex-col md:flex-row">
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-4">
            <h3 className="text-3xl font-semibold">All Projects</h3>
          </div>
        </div>
        <div className="w-full md:w-4/12 mr-auto px-4 md:pt-0 my-0"></div>
      </div>
    </div>
  );

}

export default HandleFilter;
