import Container from 'react-bootstrap/Container';
import "./NavBar_data"
import React, { ReactNode, useEffect, useState } from "react";
import "./NavBar.css"
import { NavBar_Data } from './NavBar_data';

function BasicExample() {
    const [URL, set_URl] = useState("")
    useEffect(() => {
        set_URl(window.location.pathname)
    }, [])
    useEffect(() => {
        document.title = "BlogPress"
    }, [])
    return (
        <>
            <div className="cont">
                <nav className="nav-bar">
                    <ul>
                        {NavBar_Data.map((val, key) => {
                            return (
                                <li>
                                    <div className="icon">{val.icon}</div>
                                    <a
                                        href={val.link}
                                        className="reg"
                                        id={URL === val.link ? "active-2" : ""}
                                    >
                                        {val.name}
                                    </a>
                                    <div
                                        style={{ width: val.width }}
                                        className={
                                            URL === val.link ? "l-i-a" : "l-i-n"
                                        }
                                    ></div>
                                </li>
                            );
                        })}
                    </ul>
                    <a href='/' className='logo'>
                        <div/>
                    </a>
                </nav>
                <div className="line" />
            </div>
        </>
    );
}

export default BasicExample;