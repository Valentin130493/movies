import React from "react";
import { Formik, FormikValues } from "formik";
import { loginSchema } from "./LoginSchema";
import Input from "../../_common/input/Input";
import "./LoginForm.scss";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/Routes";
import useAuth from "../../../hooks/useAuth";
import { LoginFormInputs } from "../../../constants/LoginFormInputs";

const LoginForm = () => {
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const initValues: { [key: string]: string } = {
    username: "",
    password: "",
  };

  return (
    <div className={"container"}>
      <Formik
        initialValues={initValues}
        validationSchema={loginSchema}
        onSubmit={(values: FormikValues) => {
          getToken(values).then(() => {
            navigate(ROUTES.MOVIES);
          });
        }}
      >
        {({
          values,
          handleChange,
          errors,
          handleBlur,
          handleSubmit,
          touched,
          isValid,
        }) => {
          return (
            <form className={"logInForm"} onSubmit={handleSubmit}>
              <h4>Log In To Your Account</h4>
              {LoginFormInputs.map(
                ({ placeholder, name, type, icon }, index) => {
                  return (
                    <div className={"inputs__container"} key={index}>
                      <Input
                        name={name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder={placeholder}
                        type={type}
                        value={values[name]}
                        icon={icon}
                      />
                      {touched[name] && errors[name] && (
                        <span className={"error"}>{errors[name]}</span>
                      )}
                    </div>
                  );
                }
              )}
              <div className={"btn__area"}>
                <Button
                  name={"SignIn"}
                  disabled={!isValid}
                  type={"submit"}
                  size={"small"}
                  variant="contained"
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  Submit
                </Button>
              </div>
              <div className={"nav"}>
                <p>
                  Don't have an account?
                  <NavLink to={ROUTES.REGISTRATION}>Create one</NavLink>
                </p>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
