import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(UserContext);

  console.log(userName);
  console.log(email);
  console.log(password);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(`${userName} ${email} ${password}`);
    setUser(userName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="user"
          name="user"
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="user">Username</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">E-Mail</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
