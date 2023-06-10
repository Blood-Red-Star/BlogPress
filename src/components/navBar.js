import Container from 'react-bootstrap/Container';
import "./NavBar_data"
import React, { ReactNode } from "react";
import "./NavBar.css"
import { NavBar_Data } from './NavBar_data';

function BasicExample() {
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
                                        className="reg"
                                        id={window.location.pathname == val.link ? "active-2" : ""}
                                        onClick={() => {
                                            window.location.pathname = val.link;
                                        }}
                                    >
                                        {val.name}
                                    </a>
                                    <div
                                        className={
                                            window.location.pathname == val.link ? "l-i-a" : "l-i-n"
                                        }
                                    ></div>
                                </li>
                            );
                        })}
                    </ul>
                    <button id="button">Subscribe</button>
                </nav>
                <div className="line" />
            </div>
        </>
    );
}

export default BasicExample;