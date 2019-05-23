import React from "react";
import CheckBox from "./checkbox";

const CustomCheckBox = props => {
  return (
    <label>
      <CheckBox
        defaultroom={props.defaultroom}
        handlecheck={props.handlecheck}
        ischecked={props.ischecked}
        roomid={props.roomid}
      />
      Room {props.roomid}
    </label>
  );
};

export default CustomCheckBox;
