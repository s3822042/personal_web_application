import React from "react";
import "./Project.css";
import Hero from "../hero/Hero";
import AllProject from "./Filter/AllProject";
import Pagination from "../pagination/Pagination";
import Demo from "./Demo/Demo";
import Newsletter from "../newsletter/Newsletter";
import FadeSlider from "../slider/FadeSlider";

function Project() {
  return (
    <div>
      <Hero />
      <div className="container p-10 px-6 mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">
          What I have done
        </h2>
        <div className="flex flex-wrap items-center mb-20">
          <div className="w-full pr-10 md:w-1/2">
            <h4 className="mb-3 text-3xl font-bold text-gray-800">Vortex</h4>
            <p className="mb-8 text-gray-600">
              Their primary target will be the power generators. Prepare to open
              the shield. Sir, Rebel ships are coming into our sector. Good. Our
              first catch of the day. Stand by, ion control....Fire! The first
              transport is away.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg"
              src="https://pbs.twimg.com/media/CR45LOXVEAADG5E.jpg"
              alt="Vortex"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-20">
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg"
              src="https://www.thesun.co.uk/wp-content/uploads/2019/06/SWJFO-EAPlay-08-1.jpg"
              alt="use the force"
            />
          </div>
          <div className="w-full pl-10 md:w-1/2">
            <h4 className="mb-3 text-3xl font-bold text-gray-800">
              Use the Force!
            </h4>
            <p className="mb-8 text-gray-600">
              We will never get it out now. So certain are you. Always with you
              it cannot be done. Hear you nothing that I say? Master, moving
              stones around is one thing. This is totally different. No! No
              different!
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-20">
          <div className="w-full pr-10 md:w-1/2">
            <h4 className="mb-3 text-3xl font-bold text-gray-800">
              Life creates it
            </h4>
            <p className="mb-8 text-gray-600">
              There is no try. I ca. It is too big. Size matters not. Look at
              me. Judge me by my size, do you? Hm? Mmmm. And well you should
              not. For my ally in the Force. And a powerful ally it is.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg"
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ferikkain%2Ffiles%2F2018%2F01%2FRey-Luke.jpg"
              alt="Syncing"
            />
          </div>
        </div>
      </div>

      <section className="bg-gray-100">
        <div className="container px-6 py-20 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">
            Artoo expresses
          </h2>
          <div className="flex flex-wrap">
            <div className="w-full h-auto px-2 mb-4 md:w-1/3">
              <div className="flex flex-col justify-between h-full py-2 bg-white rounded shadow">
                <p className="px-6 mb-5 text-base text-gray-800">
                  How are you feeling, kid? You do not look so bad to me. In
                  fact, you look strong enough to pull the ears off a Gundark.
                  Thanks to you.
                </p>
                <p className="px-6 text-xs text-gray-500 md:text-sm">
                  Luke Skywalker
                </p>
              </div>
            </div>

            <div className="w-full h-auto px-2 mb-4 md:w-1/3">
              <div className="flex flex-col justify-between h-full py-2 bg-white rounded shadow">
                <p className="px-6 mb-5 text-base text-gray-800">
                  That two you owe me, junior. Well your Worship, looks like you
                  managed to keep me around for a little while longer. I had
                  nothing to do with it.
                </p>
                <p className="px-6 text-xs text-gray-500 md:text-sm">
                  Emperors Royal Guards
                </p>
              </div>
            </div>

            <div className="w-full h-auto px-2 mb-4 md:w-1/3">
              <div className="flex flex-col justify-between h-full py-2 bg-white rounded shadow">
                <p className="px-6 mb-5 text-base text-gray-800">
                  General Rieekan thinks it is dangerous for any ships to leave
                  the system until we have activated the energy shield. That is
                  a good story. I think you just cant bear to let a gorgeous guy
                  like me out of your sight
                </p>
                <p className="px-6 text-xs text-gray-500 md:text-sm">
                  Queen Mother Taa Chume
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container px-6 py-20 mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            Headquarters personnel
          </h2>
          <h3 className="my-4 text-2xl text-white">
            Report to command center. Take it easy.
          </h3>
          <button className="px-8 py-4 mt-6 font-bold tracking-wider uppercase bg-white rounded-full shadow-lg hover:border-red hover:text-white hover:bg-red-600">
            Report
          </button>
        </div>
      </section>
      <div>
        <AllProject />
        <Pagination />
      </div>

      <div className="bg-darker">
        <div className="container py-20 mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            Project Demo
          </h2>
          <Demo />
        </div>
      </div>
      <Newsletter />
      <div className="w-full bg-lightest">
        <FadeSlider />
      </div>
    </div>
  );
}

export default Project;
