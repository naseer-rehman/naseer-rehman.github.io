import Header from "./Header";
import { useState, useEffect, useRef } from "react";
import AboutMeSection from "./AboutMeSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";

function RegularView() {
  const [showAboutSection, setShowAboutSection] = useState(true);
  const [showProjectsSection, setShowProjectsSection] = useState(true);

  return (
    <div className="main-container">
      <Header />
      {showAboutSection && <AboutMeSection />}
      {showProjectsSection && <ProjectsSection />}
    </div>
  );
}

export default RegularView;