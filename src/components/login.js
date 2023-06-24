import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { LoginSystem } from "../Services/loginservice";
import "./Login.css";

function Login() {
  const [password, setpassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [visible_2, setVisible_2] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(true);
  const [strength, setStrength] = useState("");
  const [st, setSt] = useState("");

  const [showCaptcha, setShowCaptcha] = useState(false);
  const [password_2, setpassword_2] = useState("");
  const [username, setUsername] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

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

  const password_func = (e) => {
    const pass = e.target.value;
    setpassword(pass);
    console.log(pass.length + 1);
    if (pass.length <= 11) {
      setStrength("w");
      setSt("Weak");
    }
    if (11 < pass.length && pass.length < 17) {
      setStrength("m");
      setSt("Moderate");
    }
    if (pass.length >= 17) {
      setStrength("s");
      setSt("Strong");
    }
  };
  const login_func = () => {
    setLogin(true);
    setRegister(false);
  };
  const register_func = () => {
    setLogin(false);
    setRegister(true);
  };
  return (
    <>
      {login ? (
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
      ) : register ? (
        <div className="form">
          <div className="username">
            <h1>Username</h1>
            <input type="text" placeholder="Username" />
          </div>
          <div className="email">
            <h1>Email Address</h1>
            <input type="email" placeholder="Email" />
          </div>
          <div className="password">
            <h1>Password</h1>
            <div className="eye-cont">
              <button
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                {visible ? (
                  <VisibilityOffIcon className="icon" />
                ) : (
                  <VisibilityIcon className="icon" />
                )}
              </button>
            </div>
            <input
              type={visible ? "text" : "password"}
              placeholder="Password"
              onChange={password_func}
            />
            <p className={strength}>{st}</p>
          </div>
          <div className="username">
            <h1>Blog Name</h1>
            <input type="text" placeholder="Blogname" />
          </div>
          <div className="submit">
            <button>Login</button>
          </div>
        </div>
      ) : (
        <h1>Error in the Code </h1>
      )}
      <div className="selectors">
        <div className="selector">
          <button className={login ? "active" : "none"} onClick={login_func}>
            Login
          </button>
        </div>
        <div className="selector">
          <button
            className={register ? "active" : "none"}
            onClick={register_func}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
