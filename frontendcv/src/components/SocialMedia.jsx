import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function SocialMedia() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="app__social">
      <div>
        <MdEmail
          onClick={() => {
            window.location = "mailto:pt.jusmin@gmail.com";
          }}
        />
      </div>
      <div>
        <BsLinkedin
          onClick={() => {
            openInNewTab("https://www.linkedin.com/in/jusmin-pt");
          }}
        />
      </div>
      <div>
        <FaGithub
          onClick={() => {
            openInNewTab("https://github.com/jmjusmin");
          }}
        />
      </div>
    </div>
  );
}

export default SocialMedia;
