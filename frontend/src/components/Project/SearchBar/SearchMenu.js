import React from "react";
import "./SearchMenu.css";
import SearchIcon from "./SearchIcons";

function SearchMenu() {
  return (
    <div className="pt-5 px-2">
      <div className="search_bar w-full mx-auto flex h-12 items-center">
        <div className="flex w-5 items-center">
          <SearchIcon />
        </div>
        <input type="text" />
      </div>
    </div>
  );
}

export default SearchMenu;
