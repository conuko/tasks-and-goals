import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

interface RegisterProps {
  addUser: Function;
}

const Register = (props: RegisterProps) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*   const [user, setUser] = useContext(UserContext); */

  /*   const addUser = (data: { name: any; email: any }) => {
    setUser({
      name: data.name,
      email: data.email,
    });
  }; */

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(`${userName} ${email} ${password}`);
    fetch("http://localhost:5000/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        props.addUser(data.data);
      })
      .catch((err) => console.log(err));
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
