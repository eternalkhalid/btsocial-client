import blessed from "../../assets/feelings/blessed.jpg";
import excited from "../../assets/feelings/excited.jpg";
import happyFeelings from "../../assets/feelings/happy.jpg";
import loved from "../../assets/feelings/loved.jpg";
import angry from "../../assets/reactions/angry.png";
import happy from "../../assets/reactions/happy.png";
import like from "../../assets/reactions/like.png";
import love from "../../assets/reactions/love.png";
import sad from "../../assets/reactions/sad.png";
import wow from "../../assets/reactions/wow.png";

export const sideBarItems = [
  {
    index: 1,
    name: "Feeds",
    url: "/app/home/feeds",
    iconName: "FaNewspaper",
  },
  {
    index: 2,
    name: "Chat",
    url: "/app/home/chat/messages",
    iconName: "FaComments",
  },
  {
    index: 3,
    name: "People",
    url: "/app/home/people",
    iconName: "FaUsers",
  },
  {
    index: 4,
    name: "Following",
    url: "/app/home/following",
    iconName: "FaUserPlus",
  },
  {
    index: 5,
    name: "Followers",
    url: "/app/home/followers",
    iconName: "FaHeart",
  },
  {
    index: 6,
    name: "Photos",
    url: "/app/home/photos",
    iconName: "FaImages",
  },
  {
    index: 7,
    name: "Notifications",
    url: "/app/home/notifications",
    iconName: "FaRegBell",
  },
  {
    index: 8,
    name: "Profile",
    url: "/app/home/profile",
    iconName: "FaRegUser",
  },
];

export const avatarColors = [
  "#f44336",
  "#e91e63",
  "#2196f3",
  "#9c27b0",
  "#3f51b5",
  "#00bcd4",
  "#4caf50",
  "#ff9800",
  "#8bc34a",
  "#009688",
  "#03a9f4",
  "#cddc39",
  "#2962ff",
  "#448aff",
  "#84ffff",
  "#00e676",
  "#43a047",
  "#d32f2f",
  "#ff1744",
  "#ad1457",
  "#6a1b9a",
  "#1a237e",
  "#1de9b6",
  "#d84315",
];

export const reactionsMap = {
  like,
  love,
  wow,
  sad,
  happy,
  angry,
};
