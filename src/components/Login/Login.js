import Input from "../../common/Input";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthAction } from "../../Providers/AuthProvider";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setAuth = useAuthAction();

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        values
      );
      setAuth(data);
      console.log(data);
      // localStorage.setItem("authState", JSON.stringify(data));
      setError(null);
      navigate("/");
      console.log(data);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnMount: true,
  });

  return (
    <div className="loginContainer">
      {error ? (
        <div className="loginError">
          <p>{error}</p>
        </div>
      ) : (
        ""
      )}
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />

        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Create Account</Link>
    </div>
  );
};

export default Login;
