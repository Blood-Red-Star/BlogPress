import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotesIcon from "@mui/icons-material/Notes";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LoginIcon from '@mui/icons-material/Login';

export const NavBar_Data = [
    {
        name: "Home Page",
        link: "/",
        icon: <HomeIcon />,
    },
    {
        name: "Login",
        link: "/login",
        icon: <LoginIcon />,
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