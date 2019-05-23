import React from "react";
import "./room.css";
import CustomCheckBox from "./components/customcheckbox";
import DropDown from "./components/dropdown";

const Room = props => {
  const divStyle = {
    backgroundColor:
      props.roomid === "1" || props.ischecked ? "white" : "lightgray"
  };
  return (
    <div className="grid-container" style={divStyle}>
      <div className="checkbox-div">
        <CustomCheckBox
          defaultroom={props.defaultroom}
          handlecheck={props.handlecheck}
          roomid={props.roomid}
          ischecked={props.ischecked}
        />
      </div>
      <DropDown
        para1="Adults"
        para2="(18+)"
        name="dd1value"
        options={props.adultOptions}
        default={props.dd1value}
        disableddropdown={props.disableddropdown}
        handleselect={props.handleselect}
        parentid={props.roomid}
      />
      <DropDown
        para1="Children"
        para2="(0-17)"
        name="dd2value"
        options={props.childOptions}
        default={props.dd2value}
        disableddropdown={props.disableddropdown}
        handleselect={props.handleselect}
        parentid={props.roomid}
      />
    </div>
  );
};

export default Room;
