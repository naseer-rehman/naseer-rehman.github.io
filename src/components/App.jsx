import '../styles/App.scss'
import { useState, useEffect, useRef } from "react";
import isUserOnMobile from "../modules/checkMobile.js";
import MobileView from "./MobileView.jsx";
import RegularView from "./RegularView.jsx";

// NOTE: Do I even need this context any more?
import IsMobileContext from "../contexts/IsMobileContext.js";

function App() {
  const isOnMobile = useRef(isUserOnMobile());
  // TODO: use something like this for the animation
  // const [showAboutSection, setShowAboutSection] = useState(true);
  // const [showProjectsSection, setShowProjectsSection] = useState(isOnMobile.current === false);
  // const [currentPage, setCurrentPage] = useState(PAGES[0]);

  // TODO: Clean this up
  useEffect(() => {
    console.log(`Hello, World!`);

    return () => {
      // console.log("No longer loaded!");
    };
  }, []);


  return (
    <IsMobileContext.Provider value={isOnMobile}>
      {!isOnMobile.current && <RegularView />}
      {isOnMobile.current && <MobileView />}
    </IsMobileContext.Provider>
  )
}

export default App;
