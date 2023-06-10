import HomeIcon from "@mui/icons-material/Home";
import CelebrationIcon from "@mui/icons-material/Celebration";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotesIcon from "@mui/icons-material/Notes";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export const NavBar_Data = [
    {
        name: "Home Page",
        link: "/",
        icon: <HomeIcon />,
    },
    {
        name: "BirthDay Card",
        link: "/birthday-card",
        icon: <CelebrationIcon />,
    },
    {
        name: "To Do List",
        link: "/info",
        icon: <FormatListBulletedIcon />,
    },
    {
        name: "Notes",
        link: "/notes",
        icon: <NotesIcon />,
    },
    {
        name: "Creator",
        link: "/creator",
        icon: <AccountCircleIcon />,
    },
];