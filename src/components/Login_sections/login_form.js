import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { LoginSystem } from "../../Services/loginservice";

function Login_page() {
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [password_2, setpassword_2] = useState("");
    const [username, setUsername] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const [visible_2, setVisible_2] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isCaptchaValid) {
            // Perform login logic here
            console.log("Login successful");
            LoginSystem(username, password_2);
        } else {
            console.log("Invalid captcha");
        }
    };
    const handleCaptchaBlur = () => {
        const isCaptchaValid = captcha === "ja5tyi02";
        setIsCaptchaValid(isCaptchaValid);
    };
    return (
        <div className="form">
            <div className="username">
                <h1>Username</h1>
                <input
                    value={username}
                    type="text"
                    placeholder="Username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
            </div>
            <div className="password">
                <h1>Password</h1>
                <div className="eye-cont">
                    <button
                        onClick={() => {
                            setVisible_2(!visible_2);
                        }}
                    >
                        {visible_2 ? (
                            <VisibilityOffIcon className="icon" />
                        ) : (
                            <VisibilityIcon className="icon" />
                        )}
                    </button>
                </div>
                <input
                    value={password_2}
                    type={visible_2 ? "text" : "password"}
                    onChange={(e) => {
                        setpassword_2(e.target.value);
                    }}
                    placeholder="Password"
                />
            </div>
            <div className="username cpatcha">
                <h1>Captcha</h1>
                <input
                    placeholder="Captcha"
                    value={captcha}
                    type="text"
                    onChange={(e) => {
                        setCaptcha(e.target.value);
                    }}
                    onBlur={handleCaptchaBlur}
                ></input>
            </div>
            <div className="show">
                <button
                    onClick={() => {
                        setShowCaptcha(!showCaptcha);
                    }}
                >
                    Show Captcha
                </button>
                <div
                    className="img-c"
                    style={{ visibility: showCaptcha ? "visible" : "hidden" }}
                />
            </div>
            <div className="submit">
                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}

export default Login_page;