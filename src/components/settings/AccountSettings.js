import React, { useContext, useState } from "react";
import { BiBadge, BiChevronDown } from "react-icons/bi";
import UserContext, { UserConsumer } from "../../UserContext";
import ColorPicker from "../ui/ColorPicker";
import ProfileModal from "./ProfileModal";
import settingsContext from "./SettingsContext";

export default function AccountSettings() {
  const [colorDropdown, setColorDropdown] = useState(false);

  const [editProfile, setEditProfile] = useState(false);

  const handleColorDropdown = () => {
    setColorDropdown(!colorDropdown);
  };

  const toggleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  const { data } = useContext(settingsContext);
  const { userData, setData } = useContext(UserContext);

  const changeUsername = (name) => {
    setData({ ...userData, username: name });
    setEditProfile(false);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Account</h1>
      <div class="flex items-center justify-center mb-8">
        <div class="w-full relative flex flex-col">
          <UserConsumer>
            {(user) => {
              return (
                <div
                  className={`h-24 w-full rounded-t-xl bg-${user.userData.profileColor}-400`}
                ></div>
              );
            }}
          </UserConsumer>
          <div class="bg-primary-200 dark:bg-primary-700 px-6 rounded-b-xl">
            <div class="flex justify-between items-center">
              <img
                class="-mt-10 rounded-full h-20 w-20 bg-accent-400 p-1"
                src="https://images.unsplash.com/photo-1620505155135-6d5cc5b4efd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=5&w=800&h=800&q=80"
                alt=""
              />
              <BiBadge className="mt-2 text-2xl text-black dark:text-white" />
            </div>
            <div class="py-2 border-b-2 flex items-center border-black dark:border-white">
              <h1 class="text-black dark:text-white font-bold text-2xl">
                {userData.username}
              </h1>
              <button
                className="ml-4 px-2 py-1 text-sm text-black dark:text-white hover:bg-accent-400 dark:hover:bg-accent-400 bg-primary-300 dark:bg-primary-600 hover:text-white rounded-md"
                onClick={toggleEditProfile}
              >
                Edit profile
              </button>
              {editProfile ? (
                <ProfileModal
                  darkMode={data.darkMode}
                  deleteConfirmation={editProfile}
                  toggleDeleteConfirmation={toggleEditProfile}
                  changeUsername={changeUsername}
                />
              ) : null}
            </div>
            <div class="py-2 mb-4">
              <h2 class="uppercase text-primary-500 dark:text-primary-400 font-bold text-sm">
                About me:
              </h2>
              <p class="text-primary-500 dark:text-primary-400 leading-5 pt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                saepe quisquam perspiciatis id illum. Explicabo mollitia atque
                et magnam nulla!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-xl mb-1">Customization</h2>
        <div className="flex mb-2">
          <p className="text-primary-500 dark:text-primary-400">
            User profile color
          </p>
          <UserConsumer>
            {(user) => {
              return (
                <div
                  className={`ml-auto relative w-8 h-8 rounded-full bg-${user.userData.profileColor}-400 text-2xl text-white flex items-center justify-center cursor-pointer hover:bg-opacity-80`}
                  onClick={handleColorDropdown}
                >
                  <BiChevronDown />
                  <div
                    className={`${
                      colorDropdown ? "visible" : "hidden"
                    } absolute top-10 -right-1 w-[6.5rem] h-auto z-10 bg-white dark:bg-primary-600 rounded-md shadow-md flex flex-wrap gap-2 p-2`}
                  >
                    {user.userData.allColors.map((color) => (
                      <ColorPicker
                        color={color}
                        listColorHandler={(color) => {
                          user.setData({
                            ...user.userData,
                            profileColor: color,
                          });
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            }}
          </UserConsumer>
        </div>
      </div>
    </div>
  );
}
