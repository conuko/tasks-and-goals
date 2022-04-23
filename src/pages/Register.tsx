import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface RegisterProps {
  addUser: Function;
}

const Register = (props: RegisterProps) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
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
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  if (localStorage.getItem("user")) {
    return <div>You are already logged in</div>;
  }

  return (
    <div>
      <form className="flex-column" onSubmit={handleSubmit}>
        <input
          className="mt-medium"
          id="user"
          name="user"
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="user"></label>
        <input
          className="mt-medium"
          id="email"
          name="email"
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email"></label>
        <input
          className="mt-medium"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password"></label>
        <button className="mt-medium">Register</button>
      </form>
    </div>
  );
};

export default Register;
