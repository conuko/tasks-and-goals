import React, { useState } from "react";

const Register = () => {
  const [userName, setUserName] = useState("John Smith");

  return (
    <div>
      <form>
        <input id="name" name="name" type="text" />
        <label htmlFor="name">Name</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="email">E-Mail</label>
        <input id="password" name="password" type="password" />
        <label htmlFor="password">Password</label>
      </form>
    </div>
  );
};

export default Register;
