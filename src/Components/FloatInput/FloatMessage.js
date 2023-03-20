import React, { useState } from "react";
import { Input } from "antd";

const { TextArea } = Input;

const FloatMessage = (props) => {
  const [focus, setFocus] = useState(false);
  let {
    label,
    value,
    placeholder,
    type,
    required,
    iconRender,
    onChange,
    disabled,
    className,
  } = props;

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
      <TextArea
        //  autoFocus={true}
        style={{height:"auto"}}
        rows={6}
        onChange={onChange}
        defaultValue={value}
        className={className ? className : "sell-description"}
        disabled={disabled}
      />

      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

export default FloatMessage;
