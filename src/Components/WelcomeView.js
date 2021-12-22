import React from "react";
import { Flex } from "@react-css/flex";

export default function WelcomeView() {
  return (
    <Flex as="section" id="welcome-section" style={{ minHeight: "100vh", backgroundColor: "#ffcdb2" }} column justifyCenter alignItemsCenter>
      <h1>Hello, I am Maher!</h1>
      <h4>Web Developer</h4>
    </Flex>
  );
}