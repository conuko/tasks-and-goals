import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface RegisterProps {
  addUser: Function;
}

const Register = (props: RegisterProps) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      user: "",
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const handleOnSubmit = () => {
    fetch("https://shortlist-backend.herokuapp.com/auth", {
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
      <form className="flex-column" onSubmit={handleSubmit(handleOnSubmit)}>
        <input
          {...register("user", { required: "This field is required" })}
          className="input mt-medium"
          id="user"
          name="user"
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <span>{errors.user?.message}</span>
        <input
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address",
            },
          })}
          className="input mt-medium"
          id="email"
          name="email"
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>{errors.email?.message}</span>
        <input
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
          className="input mt-medium"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>{errors.password?.message}</span>
        <button className="mt-medium">Register</button>
      </form>
    </div>
  );
};

export default Register;
