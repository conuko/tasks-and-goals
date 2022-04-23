import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  addUser: Function;
}

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        props.addUser(data.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  if (localStorage.getItem("user")) {
    return <div>You are already signed in</div>;
  }

  return (
    <div>
      <form className="flex-column" onSubmit={handleSubmit}>
        <input
          className="mt-medium"
          id="email"
          name="email"
          type="email"
          placeholder="E-Mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email"></label>
        <input
          className="mt-medium"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password"></label>
        <button className="mt-medium" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
