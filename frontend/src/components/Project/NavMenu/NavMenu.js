import React from "react";
// import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";

function NavMenu() {
  return (
    <div className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <h2 className="tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl px-6">
          All Projects
        </h2>
        <div className="flex items-center px-2">
          {/* <Filter /> */}
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
