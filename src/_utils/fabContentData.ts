import resumeIcon from "../assets/socmedIcon/resume-icon.png";
import githubIcon from "../assets/socmedIcon/github-icon.png";
import linkedinIcon from "../assets/socmedIcon/linkedin-icon.png";

export const fabContentData = [
  {
    key: "home",
    title: "Home",
    path: "/",
    type: "route",
    icon: null,
    isShown: false,
  },
  {
    key: "about",
    title: "About",
    path: "/about",
    type: "route",
    icon: null,
    isShown: false,
  },
  {
    key: "experiences",
    title: "Experiences",
    path: "/experiences",
    type: "route",
    icon: null,
    isShown: false,
  },
  {
    key: "projects",
    title: "Projects",
    path: "/projects",
    type: "route",
    icon: null,
    isShown: false,
  },
  {
    key: "contact",
    title: "Contact",
    path: "/contact",
    type: "route",
    icon: null,
    isShown: false,
  },
  {
    key: "linkedin",
    title: "Linkedin",
    path: "https://www.linkedin.com/in/nizar-farizi/",
    type: "externalLink",
    icon: linkedinIcon,
    isShown: true,
  },
  {
    key: "github",
    title: "Github",
    path: "https://github.com/nzrfrz",
    type: "externalLink",
    icon: githubIcon,
    isShown: true,
  },
  {
    key: "resume",
    title: "Resume",
    path: null,
    type: "externalLink",
    icon: resumeIcon,
    isShown: true,
  },
];