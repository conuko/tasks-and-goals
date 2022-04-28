import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface RegisterProps {
  addUser: Function;
}

const Register = (props: RegisterProps) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form validation rules
  const validationSchema = Yup.object().shape({
    user: Yup.string().required("User Name is required"),
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
    if (!userName || !email || !password) {
      return true;
    } else if (errors.user || errors.email || errors.password) {
      return true;
    } else {
      return false;
    }
  };

  const handleOnChange = (c: { target: { name: any; value: any } }) => {
    setValue(c.target.name, c.target.value, touchDirtyValidate);
    if (c.target.name === "user") {
      setUserName(c.target.value);
    } else if (c.target.name === "email") {
      setEmail(c.target.value);
    } else if (c.target.name === "password") {
      setPassword(c.target.value);
    }
  };

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
          {...register("user")}
          className="input mt-medium"
          id="user"
          name="user"
          type="text"
          placeholder="User Name"
          onChange={(c) => handleOnChange(c)}
        />
        <span>{errors.user?.message}</span>
        <input
          {...register("email")}
          className="input mt-medium"
          id="email"
          name="email"
          type="email"
          placeholder="E-Mail"
          onChange={(c) => handleOnChange(c)}
        />
        <span>{errors.email?.message}</span>
        <input
          {...register("password")}
          className="input mt-medium"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(c) => handleOnChange(c)}
        />
        <span>{errors.password?.message}</span>
        <button className="mt-medium" disabled={isDisabled()}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
