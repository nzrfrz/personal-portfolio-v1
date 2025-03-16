import { 
  About,
  ContactMe,
  Experiences,
  Home,
  Projects
} from "../pages";

export const routeRegistry = [
  {
    key: "Home",
    label: "home",
    path: "/",
    isIndex: true,
    element: <Home />
  },
  {
    key: "About",
    label: "about",
    path: "/about",
    isIndex: false,
    element: <About />
  },
  {
    key: "Experiences",
    label: "Experiences",
    path: "/experiences",
    isIndex: false,
    element: <Experiences />
  },
  {
    key: "Projects",
    label: "projects",
    path: "/projects",
    isIndex: false,
    element: <Projects />
  },
  {
    key: "Contact",
    label: "contact",
    path: "/contact",
    isIndex: false,
    element: <ContactMe />
  },
];