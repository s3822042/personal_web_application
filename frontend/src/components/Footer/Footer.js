import React from "react";

import { FaTwitter, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import BackToTop from "../../utils/BackToTop";

function Footer() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-10 mx-auto text-white bg-darker ">
        <div className="items-center lg:flex">
          <div className="lg:w-1/2">
            <div className="flex items-center -mx-2">
              <a className="mx-2" href="#" aria-label="Twitter">
                <FaTwitter size={30} />
              </a>

              <a className="mx-2" href="#" aria-label="Facebook">
                <FaFacebook size={30} />
              </a>

              <a className="mx-2" href="#" aria-label="Linkkedin">
                <FaLinkedin size={30} />
              </a>

              <a className="mx-2" href="#" aria-label="Github">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 mb-5 -mx-2 text-sm text-lightest">
          <p> © 2021 Vo Thanh Luan. All rights reserved</p>
          <BackToTop />
        </div>
      </div>
    </div>
  );
}

export default Footer;
