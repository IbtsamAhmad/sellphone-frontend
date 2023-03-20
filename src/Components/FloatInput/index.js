import React, { useState } from "react";
import { Input } from "antd";
import EyeOpen from "../../assets/icons/PasswordVisible.svg";
import EyeClose from "../../assets/icons/PasswordClosed.svg";

const FloatInput = (props) => {
  const [focus, setFocus] = useState(false);
 
  let { label, value, placeholder, type, required, iconRender, onChange, disabled , className} = props;
  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? "label as-label" : "label as-placeholder";

  const requiredMark = required ? <span className="text-danger">*</span> : null;

  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {iconRender ? (
        <Input.Password
        style={{ position:"relative"}}
        onChange={onChange}
        defaultValue=""
         className={ className ? className : "sell-input" }
          iconRender={(visible) =>
            visible ? (
              <img className="eyeIcon" src={EyeOpen} alt="" />
            ) : (
              <img className="eyeIcon" src={EyeClose} alt="" />
            )
          }
        />
      ) : (
        <Input
      //  autoFocus={true}
          onChange={onChange}
          type={type}
        //  defaultValue="aaa"
         defaultValue={value}
          className={ className ? className : "sell-input" }
          disabled={disabled}
        />
      )}
      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

export default FloatInput;
