import "./styles/ProjectCard.scss";
import BitcoinBotLogo from "../images/bitcoin-discord-bot-logo.png";

// A component for every project card that represents a single project.
const ProjectCard = () => {
  return (
    <div className="ProjectCard content-box">
      <div className="project-card-image-container">
        <img src={BitcoinBotLogo} alt="Project logo." />
      </div>
      <div className="project-card-info">
        <h3>Project Name Here</h3>
        <div className="project-card-button-container">
          <button>info</button>
          <a className="icon-link" href="#" target="__blank">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M256 0C115.3 0 0 116.3 0 257c0 139.9 114.3 255 256 255 141.6 0 256-115 256-255C512 116.3 396.7 0 256 0zm45 477.5a222.3 222.3 0 0 1-90 0v-70.2c0-16.8 4.5-22.8 10.5-30.9 3-3.5 4.9-6.6 18.6-27.3l-23.1-3.6c-59.4-8.7-82.8-39.6-92.1-63.6a102 102 0 0 1 15.9-97.8 18 18 0 0 0 3.6-17.4 88.4 88.4 0 0 1-.9-44.1c16 2.3 32.3 13.7 45.9 21.9 6.3 3.7 9.6 2.7 12.6 3 11-2.3 28-7.8 54.3-7.8 16.2 0 33.3 2.4 50.1 7.2 3 0 7.8 2.5 16.2-2.4 14.3-8.7 30-19.7 45.9-21.9 3 8.4 3.6 30.3-.9 44.1a18 18 0 0 0 3.6 17.4 102 102 0 0 1 15.9 97.8c-9.3 24-32.7 54.9-92.1 63.6l-23.1 3.6c14.2 21.4 15.7 24 18.6 27.3 6 8.1 10.5 14.1 10.5 30.9zm30-8.7v-61.5a72 72 0 0 0-8.4-36.9c45.6-12.3 78-39.3 92.4-78a131.9 131.9 0 0 0-17.1-123c4.5-20.1 4.5-52.2-6.3-67.2A23.4 23.4 0 0 0 371.8 92h-.3c-23.3 1.3-41.6 13-61.2 24.9a207.2 207.2 0 0 0-108.3 0c-20.7-12.5-38.8-23.7-62.7-24.9a23 23 0 0 0-18.9 10.2c-10.8 15-10.8 47.1-6.3 67.2a132 132 0 0 0-17.1 123c14.4 38.7 46.8 65.7 92.4 78a65 65 0 0 0-7.8 26.3 40 40 0 0 1-24.7 2 33 33 0 0 1-19.2-16.5c-12-20-32.2-36.3-55.3-34.2l2.6 30c10.7-1 21.4 10.3 26.9 19.7a63 63 0 0 0 36.5 29.9 63.5 63.5 0 0 0 32.6.9v40.4A225.5 225.5 0 0 1 30 257C30 132.8 131.8 30 256 30s226 102.8 226 227c0 97.8-63.7 181.2-151 211.8zm0 0"/>
            </svg>
        </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;