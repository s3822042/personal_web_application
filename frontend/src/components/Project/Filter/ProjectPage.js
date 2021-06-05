import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";

const projects = ["Vue", "React", "Angular"];

function ProjectPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = projects.filter(
      (project) =>
        project.toLowerCase().includes(searchTerm) ||
        project.includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <section className="py-8 bg-white">
      <div className="container flex flex-wrap items-center w-full pt-4 pb-12 mx-auto">
        <div className="w-full z-30 top-0 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
            <h2 className="tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl px-6">
              All Projects
            </h2>
            <div className="flex items-center px-2">
              <div className="px-2">
                <div className="search_bar w-full mx-auto flex h-12 items-center">
                  <div className="flex w-5 items-center">
                    <SearchIcon />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full p-6 md:w-1/3 xl:w-1/4">
          <ul>
            {searchResults.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
export default ProjectPage;
