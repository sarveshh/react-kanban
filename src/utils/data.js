import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";
import { BsFillDiamondFill } from "react-icons/bs";

//Card Priority Data
export const customIcons = [
  {
    id: 1,
    icon: <FcHighPriority />,
    label: "High Priority",
    color: "red",
  },
  {
    id: 2,
    icon: <FcMediumPriority />,
    label: "Medium Priority",
    color: "yellow",
  },
  {
    id: 3,
    icon: <FcLowPriority />,
    label: "Low Priority",
    color: "green",
  },
  {
    id: 4,
    icon: <BsFillDiamondFill />,
    label: "No Priority",
    color: "whitesmoke",
  },
];

export const pageData = [
  { to: "about", title: "About" },
  { to: "features", title: "Features" },
];
