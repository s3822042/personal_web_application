import React from "react";
import BlackGuyAnimation from "../animation/BlackGuyAnimation";

import { GiFeatheredWing } from "react-icons/gi";

function DescribeMe() {
  return (
    <div className="px-4 dark:bg-darker dark:text-darker">
      <div className="flex flex-col items-center md:flex-row">
        <div className="px-40 my-0 mr-auto x-w-xl md:w-4/12 md:pt-0">
          <BlackGuyAnimation />
        </div>
        <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
          <div>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                    <GiFeatheredWing />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">
                    Per ei quaeque sensibus
                  </h4>
                  <p className="mt-2 dark:text-coolGray-400">
                    Ex usu illum iudico molestie. Pro ne agam facete
                    mediocritatem, ridens labore facete mea ei. Pro id apeirian
                    dignissim.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">
                    Cu imperdiet posidonium sed
                  </h4>
                  <p className="mt-2 dark:text-coolGray-400">
                    Amet utinam aliquando ut mea, malis admodum ocurreret nec
                    et, elit tibique cu nec. Nec ex maluisset inciderint, ex
                    quis.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">
                    Nulla omittam sadipscing mel ne
                  </h4>
                  <p className="mt-2 dark:text-coolGray-400">
                    At sed possim oporteat probatus, justo graece ne nec, minim
                    commodo legimus ut vix. Ut eos iudico quando soleat, nam
                    modus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescribeMe;
