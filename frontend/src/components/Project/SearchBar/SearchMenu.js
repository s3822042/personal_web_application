import React from "react";
import "./SearchMenu.css";
import SearchIcons from "./SearchIcons";

function SearchMenu() {
  return (
    <div className="px-2">
      <div className="search_bar w-full mx-auto flex h-12 items-center">
        <div className="flex w-5 items-center">
          <SearchIcons />
        </div>
        <input type="text" />
      </div>
    </div>
  );
}

export default SearchMenu;
