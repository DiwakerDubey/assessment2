import React from "react";

const CheckBox = props => {
  const { defaultroom, roomid, ischecked, handlecheck } = props;
  if (defaultroom) {
    return null;
  }
  return (
    <input
      type="checkbox"
      key={roomid}
      checked={ischecked}
      onChange={handlecheck}
      value={roomid}
    />
  );
};

export default CheckBox;
