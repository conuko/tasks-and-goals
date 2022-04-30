import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface LoginProps {
  addUser: Function;
}

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, setValue, reset, formState } =
    useForm(formOptions);
  const { errors } = formState;

  const touchDirtyValidate = {
    shouldTouch: true,
    shouldDirty: true,
    shouldValidate: true,
  };

  const navigate = useNavigate();

  const isDisabled = () => {
    if (!email || !password) {
      return true;
    } else if (errors.email || errors.password) {
      return true;
    } else {
      return false;
    }
  };

  const handleOnChange = (c: { target: { name: any; value: any } }) => {
    setValue(c.target.name, c.target.value, touchDirtyValidate);
    if (c.target.name === "email") {
      setEmail(c.target.value);
    } else {
      setPassword(c.target.value);
    }
  };

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
        if (!(res.status === 200)) {
          alert("Invalid email or password");
        } else {
          return res.json();
        }
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
          {...register("email")}
          className={`input mt-medium ${errors.email ? "is-invalid" : ""}`}
          id="email"
          name="email"
          type="email"
          placeholder="E-Mail"
          onChange={(c) => handleOnChange(c)}
        />
        <span>{errors.email?.message}</span>
        <label htmlFor="email"></label>
        <input
          {...register("password")}
          className={`input mt-medium ${errors.password ? "is-invalid" : ""}`}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(c) => handleOnChange(c)}
        />
        <span>{errors.password?.message}</span>
        <label htmlFor="password"></label>
        <button className="mt-medium" type="submit" disabled={isDisabled()}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
