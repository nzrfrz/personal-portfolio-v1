
import ReactPlayer from "react-player";

import { IoClose } from "react-icons/io5";
import styles from "../../_styles/ProjectVideoPlayer.module.css";

import { IProjects } from "../../_utils";

interface ThisProps {
  selectedProjectData?: IProjects;
  isVideoContainerOpen: boolean;
  onClose: () => void;
}

export const ProjectVideoPlayer: React.FC<ThisProps> = ({
  selectedProjectData,
  isVideoContainerOpen = false,
  onClose,
}) => {
  return (
    <>
    <button
      className={styles.closeBtn}
      onClick={onClose}
      style={{ display: isVideoContainerOpen === true ? "flex" : "none"}}
    >
      <IoClose color="white" fontSize="30px" />
    </button>
    <div 
      className={styles.container}
      style={{ display: isVideoContainerOpen === true ? "flex" : "none"}}
    >
      <ReactPlayer url={selectedProjectData?.videoUrl} controls={true} />
    </div>
    </>
  );
};