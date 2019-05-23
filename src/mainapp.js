import React from "react";
import "./room.css";
import Room from "./Room";

class MainApp extends React.Component {
  state = {
    roomCount: [
      {
        value: "1",
        default: true,
        ischecked: null,
        disableddropdown: false,
        dd1value: "1",
        dd2value: "0"
      },
      {
        value: "2",
        default: false,
        ischecked: false,
        disableddropdown: true,
        dd1value: "1",
        dd2value: "0"
      },
      {
        value: "3",
        default: false,
        ischecked: false,
        disableddropdown: true,
        dd1value: "1",
        dd2value: "0"
      },
      {
        value: "4",
        default: false,
        ischecked: false,
        disableddropdown: true,
        dd1value: "1",
        dd2value: "0"
      }
    ]
  };

  componentDidMount() {
    this.loadJson();
  }

  loadJson = () => {
    const state =
      JSON.parse(window.localStorage.getItem("LOCALSTORAGE_KEY")) || this.state;
    this.setState(state);
  };
  saveJson = () => {
    window.localStorage.setItem("LOCALSTORAGE_KEY", JSON.stringify(this.state));
  };

  handlecheck = ev => {
    const state = { ...this.state };
    state.roomCount.forEach(item => {
      if (ev.target.checked && item.value < ev.target.value) {
        item.ischecked = ev.target.checked;
        item.disableddropdown = !ev.target.checked;
      }
      if (!ev.target.checked && item.value > ev.target.value) {
        item.ischecked = ev.target.checked;
        item.disableddropdown = !ev.target.checked;
      }
      if (item.value === ev.target.value) {
        item.ischecked = ev.target.checked;
        item.disableddropdown = !ev.target.checked;
      }
    });
    this.setState(state);
  };

  handleselect = ev => {
    const state = { ...this.state };
    state.roomCount.forEach(item => {
      if (item.value === ev.target.parentNode.id) {
        item[ev.target.name] = ev.target.value;
      }
    });
    this.setState(state);
  };

  render() {
    const adultOptions = [1, 2];
    const childOptions = [0, 1, 2];
    return (
      <form onSubmit={this.saveJson}>
        {this.state.roomCount.map(item => (
          <Room
            key={item.value}
            roomid={item.value}
            defaultroom={item.default}
            ischecked={item.ischecked}
            handlecheck={this.handlecheck}
            handleselect={this.handleselect}
            adultOptions={adultOptions}
            childOptions={childOptions}
            disableddropdown={item.disableddropdown}
            dd1value={item.dd1value}
            dd2value={item.dd2value}
          />
        ))}
        <div>
          <input type="submit" />
        </div>
      </form>
    );
  }
}

export default MainApp;
