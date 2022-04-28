import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface LoginProps {
  addUser: Function;
}

const Login = (props: LoginProps) => {
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
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const handleOnSubmit = () => {
    fetch("https://shortlist-backend.herokuapp.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
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
      <form className="flex-column" onSubmit={handleSubmit(handleOnSubmit)}>
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>{errors.email?.message}</span>
        <label htmlFor="email"></label>
        <input
          {...register("password", {
            required: "This field is required",
          })}
          className="input mt-medium"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>{errors.password?.message}</span>
        <label htmlFor="password"></label>
        <button className="mt-medium" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
