import React, { ChangeEvent, useState } from "react";
import "./Input.scss";
import iconEye from "../../../assets/static/svg/icon_eye.svg";

interface Props {
  className?: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  maxSymbols?: number;
  minSymbols?: number;
  placeholder?: string;
  value?: string | ReadonlyArray<string>;
  onBlur?: any;
  icon?: boolean;
}

const Input: React.FC<Props> = ({
  value,
  onBlur,
  onChange,
  type,
  name,
  className,
  maxSymbols,
  minSymbols,
  placeholder,
  icon,
}) => {
  const [show, setShow] = useState(true);

  const showPass = () => {
    setShow(!show);
  };

  return (
    <div className={"input__form__container"}>
      <input
        type={icon ? (show ? "password" : "test") : type}
        onBlur={onBlur}
        className={"input__form" || className}
        value={value}
        name={name}
        onChange={onChange}
        max={maxSymbols}
        min={minSymbols}
        placeholder={placeholder}
        style={icon ? { position: "relative" } : { position: "static" }}
      />
      {icon && <img src={iconEye} alt={"eye"} onClick={showPass} />}
    </div>
  );
};

export default Input;
