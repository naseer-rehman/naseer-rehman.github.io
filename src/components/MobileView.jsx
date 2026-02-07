import Header from "./Header";
import { useState, useEffect, useRef, useContext } from "react";

import IsMobileContext from "../contexts/IsMobileContext.js";

import AboutMeSection from "./AboutMeSection.jsx";
import ProjectsSection from "./ProjectsSection.jsx";
import MobileNavigation from "./MobileNavigation.jsx";

function MobileView () {
  const PAGES = ["ABOUT", "PROJECTS"];

  const isMobileContext = useContext(IsMobileContext);
  const [showAboutSection, setShowAboutSection] = useState(true);
  const [showProjectsSection, setShowProjectsSection] = useState(true);
  const [currentPage, setCurrentPage] = useState(PAGES[0]);
  
  useEffect(() => {
    console.log("rMobileNavigationunning current page hook");
    setShowAboutSection(currentPage === "ABOUT");
    setShowProjectsSection(currentPage === "PROJECTS");
  }, [currentPage]);

  return (
    <div className="mobile main-container">
      <Header />
      {showAboutSection && <AboutMeSection />}
      {showProjectsSection && <ProjectsSection />}
      <MobileNavigation 
        pages={PAGES}
        setPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default MobileView;