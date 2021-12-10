import React from "react";
import { Formik, FormikValues } from "formik";
import { ROUTES } from "../../../constants/Routes";
import Input from "../../_common/input/Input";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import "./RegisrationForm.scss";
import { registrationSchema } from "./RegistrationSchema";
import useAuth from "../../../hooks/useAuth";
import { RegFormInputs } from "../../../constants/RegstFormInputs";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const initValues: { [key: string]: string } = {
    username: "",
    password: "",
    password2: "",
    email: "",
    first_name: "",
    last_name: "",
  };

  return (
    <div className={"container"}>
      <Formik
        initialValues={initValues}
        validationSchema={registrationSchema}
        onSubmit={(values: FormikValues) => {
          register(values);
        }}
      >
        {({
          values,
          handleChange,
          errors,
          handleSubmit,
          isValid,
          touched,
          handleBlur,
        }) => {
          return (
            <form className={"logInForm"} onSubmit={handleSubmit}>
              <h4>Entering data about yourself </h4>

              {RegFormInputs.map(({ placeholder, name, type, icon }, index) => {
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
              })}

              <div className={"btn__area"}>
                <Button
                  name={"SignIn"}
                  disabled={!isValid}
                  type={"submit"}
                  size={"small"}
                  variant="contained"
                >
                  Submit
                </Button>
              </div>
              <div className={"nav__logIn"}>
                <p>Did you have an account? </p>
                <NavLink className={"link"} to={ROUTES.LOGIN}>
                  Log in
                </NavLink>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
