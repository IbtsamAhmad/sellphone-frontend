import React, { useState } from "react";
import { Select } from "antd";


import SelectIcon from "../../assets/icons/SelectIcon.svg";


const { Option } = Select;

const FloatSelect = (props) => {
  const [focus, setFocus] = useState(false);
  let { label, value, placeholder, type, required, iconRender, children, onChange, filterOption, showSearch, className, disabled, defaultValue} = props;

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
      <Select
      value={value}
      disabled={disabled}
    //  defaultValue={defaultValue ? defaultValue : null}
      className={ className ? className : "sell-select" }
      filterOption={filterOption}
    //  autoFocus={true}
       showSearch={showSearch}
        placeholder={undefined}
        optionFilterProp="children"
        onChange={onChange}
        suffixIcon={<img src={SelectIcon} alt=""/>}
      >
       {children}
      </Select>
      <label className={labelClass}>
        {isOccupied ? label : placeholder} {requiredMark}
      </label>
    </div>
  );
};

export default FloatSelect;
