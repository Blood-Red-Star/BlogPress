import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { createUser } from "../../Services/user";

function Register_page() {
  const [password, setpassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [strength, setStrength] = useState("");
  const [st, setSt] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [blogName, setBlogName] = useState("");
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
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(username, password, email, blogName);
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="username">
        <h1>Username</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
      </div>
      <div className="email">
        <h1>Email Address</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
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
        <input
          type="text"
          placeholder="Blog Name"
          onChange={(e) => {
            setBlogName(e.target.value);
          }}
          value={blogName}
        />
      </div>
      <div className="submit">
        <button>Register</button>
      </div>
    </form>
  );
}

export default Register_page;
