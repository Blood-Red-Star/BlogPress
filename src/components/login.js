import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./Login.css";
import LoginForm from "./LoginForm/LoginForm";

function Login() {
  const [password, setpassword] = useState("");
  const [visibile, setvisible] = useState(false);
  const [login, setlogin] = useState(false);
  const [register, setregister] = useState(true);
  const [strength, setstrength] = useState("");
  const [st, setst] = useState("");
  const passowrd_func = (e) => {
    const pass = e.target.value;
    setpassword(pass);
    console.log(pass.length + 1);
    if (pass.length <= 11) {
      setstrength("w");
      setst("Weak");
    }
    if (11 < pass.length && pass.length < 17) {
      setstrength("m");
      setst("Moderate");
    }
    if (pass.length >= 17) {
      setstrength("s");
      setst("Strong");
    }
  };
  const login_func = () => {
    setlogin(true);
    setregister(false);
  };
  const register_func = () => {
    setlogin(false);
    setregister(true);
  };
  return (
    <>
      {login ? (  
        <LoginForm>

        </LoginForm>
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
                  setvisible(!visibile);
                }}
              >
                {visibile ? (
                  <VisibilityOffIcon className="icon" />
                ) : (
                  <VisibilityIcon className="icon" />
                )}
              </button>
            </div>
            <input
              type={visibile ? "text" : "password"}
              placeholder="Password"
              onChange={passowrd_func}
            />
            <p className={strength}>{st}</p>
          </div>
          <div className="username">
            <h1>Blog Name</h1>
            <input type="text" placeholder="Blogname" />
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
