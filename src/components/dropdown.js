import React from "react";

const DropDown = props => {
  return (
    <div id={props.parentid} className="dropdown-div">
      <p>{props.para1}</p>
      <p>{props.para2}</p>
      <select
        disabled={props.disableddropdown}
        onChange={props.handleselect}
        name={props.name}
        value={props.default}
      >
        {props.options.map(function(item) {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
