import React from "react";
import "./Filter.css";

function HandleFilter() {
  return (
    <div className="h-full w-full bg-white text-center pt-6  m-0">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        All Projects
      </h2>

      <div className="buttons">
        <button className="button all active">All</button>
        <button className="button python">Python</button>
        <button className="button java">Java</button>
        <button className="button c_pp">C++</button>
        <button className="button web">Web</button>
        <button className="button mobile">Mobile</button>
      </div>

      <div className="pt-4 w-full grid grid-rows-2 grid-cols-4 px-6 py-3">
        <div className="item c_pp"></div>
        <div className="item web"></div>
        <div className="item java"></div>
        <div className="item java"></div>
        <div className="item python"></div>
        <div className="item web"></div>
        <div className="item web"></div>
        <div className="item java"></div>
        <div className="item mobile"></div>
        <div className="item c_pp"></div>
        <div className="item web"></div>
        <div className="item java"></div>
        <div className="item java"></div>
        <div className="item python"></div>
        <div className="item web"></div>
        <div className="item web"></div>
        <div className="item java"></div>
        <div className="item mobile"></div>
        <div className="item web"></div>
        <div className="item java"></div>
      </div>
    </div>
  );
}
export default HandleFilter;
