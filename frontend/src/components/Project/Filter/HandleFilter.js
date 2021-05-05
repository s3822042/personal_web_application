import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import DetailsIcon from "@material-ui/icons/Details";

function HandleFilter() {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto w-full  flex items-center flex-wrap pt-4 pb-12">
        <NavMenu />
        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              className="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div className="pt-3 flex items-center justify-between">
              <p className="">4 SST Led Board</p>
              <DetailsIcon color="action" />
            </div>
            <p className="pt-1 text-gray-900">C++</p>
          </a>
        </div>

        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              className="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div className="pt-3 flex items-center justify-between">
              <p className="">4 SST Web Application</p>
              <DetailsIcon color="action" />
            </div>
            <p className="pt-1 text-gray-900">Web</p>
          </a>
        </div>

        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              className="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div className="pt-3 flex items-center justify-between">
              <p className="">Spotify UI</p>
              <DetailsIcon color="action" />
            </div>
            <p className="pt-1 text-gray-900">Vue</p>
          </a>
        </div>

        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              className="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div className="pt-3 flex items-center justify-between">
              <p className="">Reddit</p>
              <DetailsIcon color="action" />
            </div>
            <p className="pt-1 text-gray-900">React</p>
          </a>
        </div>

        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              className="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div className="pt-3 flex items-center justify-between">
              <p className="">Twitter</p>
              <DetailsIcon color="action" />
            </div>
            <p className="pt-1 text-gray-900">Angular</p>
          </a>
        </div>

        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              className="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div className="pt-3 flex items-center justify-between">
              <p className="">Product Name</p>
              <DetailsIcon color="action" />
            </div>
            <p className="pt-1 text-gray-900">Java</p>
          </a>
        </div>

        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              className="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div className="pt-3 flex items-center justify-between">
              <p className="">Product Name</p>
              <DetailsIcon color="action" />
            </div>
            <p className="pt-1 text-gray-900">Python</p>
          </a>
        </div>

        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
          <a href="#">
            <img
              className="hover:grow hover:shadow-lg"
              src="https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
            />
            <div className="pt-3 flex items-center justify-between">
              <p className="">Product Name</p>
              <DetailsIcon color="action" />
            </div>
            <p className="pt-1 text-gray-900">TypeScript</p>
          </a>
        </div>
      </div>
    </section>
  );
}
export default HandleFilter;
