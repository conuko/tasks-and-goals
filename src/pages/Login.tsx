import React, { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("John Smith");

  return (
    <div>
      <form>
        <input id="email" name="email" type="email" />
        <label htmlFor="email">E-Mail</label>
        <input id="password" name="password" type="password" />
        <label htmlFor="password">Password</label>
      </form>
    </div>
  );
};

export default Login;
