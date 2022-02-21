import * as yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import Input from "../../common/Input";
import { useState, useEffect } from "react";
import "./Signup.css";
import { addData, getData } from "../../services/httpService";
import { useNavigate, useLocation } from "react-router";
import { useAuthAction } from "../../Providers/AuthProvider";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfrim: "",
  phoneNumber: "",
};

const validationSchema = yup.object({
  name: yup
    .string()
    .required("UserName is required!")
    .min(6, "UserName length is not valid!"),
  email: yup
    .string()
    .required("Email is required!")
    .email("Invalid email format!"),
  password: yup
    .string()
    .required("Password is required!")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase"
    ),
  passwordConfrim: yup
    .string()
    .required("PasswordConfirm required!")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  phoneNumber: yup
    .string()
    .required("PhoneNumber is required!")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number")
    .nullable(),
});

const Signup = () => {
  const [error, setError] = useState(null);
  const setAuth = useAuthAction();

  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    const userData = { name, email, phoneNumber, password };

    try {
      const { data } = await addData(userData);

      setAuth(data);
      // localStorage.setItem("authState", JSON.stringify(data));
      navigate("/", { state: values });
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="signupContainer">
      {error ? (
        <div className="errorExist">
          <p>{error}</p>
        </div>
      ) : (
        ""
      )}
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" type="text" label="UserName" />
        <Input formik={formik} name="email" type="text" label="Email" />
        <Input
          formik={formik}
          name="phoneNumber"
          type="text"
          label="PhoneNumber"
        />
        <Input
          formik={formik}
          name="password"
          type="password"
          label="Password"
        />
        <Input
          formik={formik}
          name="passwordConfrim"
          type="password"
          label="PasswordConfirm"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
