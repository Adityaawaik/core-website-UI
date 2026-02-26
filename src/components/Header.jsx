import React from "react";
import clockIcon from "../../images/clockIcon.svg";
import notesIcon from "../../images/notesIcon.svg";
import notifyIcon from "../../images/notifyIcon.svg";
import profileImage from "../../images/profileImage.svg";

const Header = () => {
  return (
    <>
      <header className="flex w-full justify-between h-20 items-center bg-white mt-4 p-4 rounded-lg max-[450px]:flex-col max-[450px]:p-0 ">
        <div className="people-div">
          <p>People</p>
        </div>

        <div className="profile-info flex gap-4 min-[451]:hide items-center">
          <div className="mst border p-1  rounded-3xl">
            <p>MST</p>
          </div>

          <div className="time flex items-center gap-2 border p-1 max-[450px]:hidden   rounded-3xl">
            <img src={clockIcon} alt="clock-icon" />
            <span>02 : 03 : 02</span>
            <img
              src={notesIcon}
              className="bg-gray-100 p-1 rounded-[50%]"
              alt="notes-icon"
            />
          </div>
          <div className="notes border p-1  rounded-[50%]">
            <img src={notifyIcon} alt="notifyIcon" />
          </div>
          <div className="profile-image  p-1  rounded-[50%]">
            <img src={profileImage} alt="profileImage" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
