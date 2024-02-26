import menu from "./assets/menu.png";
//import menuColor from "../../assets/menu-color.png"
import group from "./assets/group (3).png";
//import groupColor from "../../asset/group-color.png"
import list from "./assets/list.png";
//import listColor from "../../assets/list-color.png"
import user from "./assets/user.png";

export const data = [
  {
    id: 1,
    title: "Dashboard",
    clicked: false,
    img: menu,
  },
  {
    id: 2,
    title: "All Member",
    clicked: false,
    img: group,
  },
  {
    id: 3,
    title: "Plan Category",
    clicked: false,
    img: list,
  },
  {
    id: 4,
    title: "Account",
    clicked: false,
    img: user,
  },
];

export const cardData = [
  { status: "Total Member", number: 5, color: "white" },
  { status: "Active Member", number: 5, color: "white" },
  { status: "Not-Active", number: 5, color: "white" },
  { status: "1-Month-Plan", number: 5, color: "white" },
  { status: "2-Month-Plan", number: 5, color: "white" },
  { status: "3-Month-Plan", number: 5, color: "white" },
];
