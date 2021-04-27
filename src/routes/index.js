import { AiFillHome, AiFillMail } from "react-icons/ai";
import { FaBrain, FaUserAlt, FaFolderOpen } from "react-icons/fa";
import Home from "../pages/index";
import About from "../pages/about";
import Projects from "../pages/work";
import Skills from "../pages/skills";
import Connect from "../pages/connect";
import Reviews from "../pages/reviews";

const routes = [
  {
    title: "Home",
    path: "/",
    icon: AiFillHome,
    component: Home,
  },
  {
    title: "About",
    path: "/about",
    icon: FaUserAlt,
    component: About,
  },
  {
    title: "Work",
    path: "/work",
    icon: FaFolderOpen,
    component: Projects,
  },
  {
    title: "Skills",
    path: "/skills",
    icon: FaBrain,
    component: Skills,
  },
  {
    title: "Connect",
    path: "/connect",
    icon: AiFillMail,
    component: Connect,
  },
];

export default routes;
