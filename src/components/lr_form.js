import React, { useState } from "react";
import Login_page from "./Login_sections/login_form";
import Register_page from "./Login_sections/regstir_form";
import "../Styles/Login.css";

function LR_form() {
  const [login, setLogin] = useState(false);
  const login_func = () => {
    setLogin(!login)
  };
  return (
    <>
      <div className="selectors">
        <div className="selector">
          <button className={login ? "active" : "none"} onClick={login_func}>
            Login
          </button>
        </div>
        <div className="selector">
          <button
            className={login ? "none" : "active"}
            onClick={login_func}
          >
            Register
          </button>
        </div>
      </div>
      {login ? (
        <Login_page />
      ) :  (
        <Register_page />
      )}
    </>
  );
}

export default LR_form;
