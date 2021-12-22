import React from "react";
import "./Navigation.css";

import { Flex } from "@react-css/flex";

export default function Navigation() {
  return (
    <nav id="navbar">
      <Flex as="ul" justifyEnd>
        <li><a href="#welcome-section">Welcome</a></li>
        <li><a href="#projects">My Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </Flex>
    </nav>
  )
}