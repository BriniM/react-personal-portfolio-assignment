import React from "react";

import { Flex } from "@react-css/flex";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";

export default function SocialMediaView() {
  return (
    <Flex
      as="section"
      id="contact"
      style={{ minHeight: "100vh" }}
      column
      justifyCenter
      alignItemsCenter
    >
      <h1>Get in touch!</h1>
      <Flex id="social">
        <SocialLink href="http://github.com/BriniM" icon={faGithub}/>
        <SocialLink href="http://facebook.com/maher.brini" icon={faFacebook}/>
      </Flex>
    </Flex>
  );
}
function SocialLink({ href, icon }) {
  return (
    <a
      id="profile-link"
      href={href}
      rel="noreferrer"
      target="_blank"
      style={{margin: "0 20px"}}
    >
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  );
}
