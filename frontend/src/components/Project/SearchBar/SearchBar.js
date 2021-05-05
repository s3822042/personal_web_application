import React, { useState } from "react";
import SearchMenu from "./SearchMenu";
import SearchIcon from "./SearchIcons";

function SearchBar() {
  const [showMessage, setShowMessage] = useState(false);

  const showSearchBar = () => {
    setShowMessage(!showMessage);
  };
  return (
    <>
      <a
        className="px-6 inline-block no-underline hover:text-black"
        onClick={() => showSearchBar()}
      >
        {!showMessage && <SearchIcon />}
      </a>
      <div>{showMessage && <SearchMenu />}</div>
    </>
  );
}

export default SearchBar;
