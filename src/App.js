import React from "react";

import './App.css';

import Navigation from './Components/Navigation/Navigation';
import WelcomeView from './Components/WelcomeView';
import ProjectsView from "./Components/ProjectsView";
import SocialMediaView from "./Components/SocialMediaView";

function App() {
  return (
    <>
      <Navigation />
      <WelcomeView />
      <ProjectsView />
      <SocialMediaView />
    </>
  );
}

export default App;
