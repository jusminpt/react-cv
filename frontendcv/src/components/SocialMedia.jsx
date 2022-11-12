import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaGithub />
      </div>
    </div>
  );
}

export default SocialMedia;
