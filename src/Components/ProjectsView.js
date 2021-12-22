import React from "react";
import { Flex } from "@react-css/flex";

export default function ProjectsView() {
  return (
    <Flex
      as="section"
      id="projects"
      style={{ minHeight: "100vh", backgroundColor: "#e9edc9" }}
      justifyCenter
      alignItemsCenter
      column
    >
      <h1
        style={{
          textAlign: "center",
          margin: "0 0 30px 0",
          padding: "30px 0 0 0",
        }}
      >
        Past Projects
      </h1>
      <Flex as="article" justifyCenter>
        <ProjectTile projectLink="https://codepen.io/brinim/full/GRJJbma" projectImageAlt={'Survey Form'} projectImageSrc={'https://raw.githubusercontent.com/BriniM/fcc/main/2.png'} />
        <ProjectTile projectLink="https://codepen.io/brinim/full/rNVaoNo" projectImageAlt={'Pasteur Tribute'} projectImageSrc={'https://raw.githubusercontent.com/BriniM/fcc/main/1.png'} />
      </Flex>
    </Flex>
  );
}

function ProjectTile({ projectLink, projectImageSrc, projectImageAlt }) {
  return (
    <a href={projectLink}>
      <div
        style={{
          width: "273px",
          height: "133px",
          marginRight: "20px",
          backgroundColor: "#f2f2f2",
        }}
      >
        <img src={projectImageSrc} alt={projectImageAlt} />
      </div>
    </a>
  );
}
