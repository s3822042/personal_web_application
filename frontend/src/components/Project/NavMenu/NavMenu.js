import React from "react";
// import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";

function NavMenu() {
  return (
    <nav className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <a className="tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl px-6">
          All Projects
        </a>
        <div className="flex items-center">
          {/* <Filter /> */}
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
