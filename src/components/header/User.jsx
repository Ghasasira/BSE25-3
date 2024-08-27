import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiChatUploadLine,
  RiContactsBookLine,
  RiMenuLine,
} from "react-icons/ri";
import { BiHome, BiInfoCircle, BiUser } from "react-icons/bi";
import { nav } from "../../assets/data/data";

export const User = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(false);
  };
  return (
    <div>
      <nav>
        <ul>
          {nav.map((link) => (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="profile">
        <>
          <div className="userBar">
            <button
              className="img"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <RiMenuLine />
            </button>
          </div>

          {profileOpen && (
            <div className="openProfile boxItems" onClick={close}>
              <div className="image">
                <div className="img">
                  <img
                    src="https://i.pinimg.com/1200x/6a/7f/ba/6a7fba865bd67b02a800bc1d60b98686.jpg"
                    alt="images"
                  />
                </div>

                <div className="text">
                  <h4>Group 3</h4>
                  <p>BSE25, MUK</p>
                </div>
              </div>

              <Link to="/">
                <button className="box">
                  <BiHome className="icon" />
                  <h4>Home</h4>
                </button>
              </Link>

              <Link to="/about">
                <button className="box">
                  <BiUser class="icon" />
                  <h4>Gasasira</h4>
                </button>
              </Link>

              <Link to="/about">
                <button className="box">
                  <BiUser class="icon" />
                  <h4>Agani</h4>
                </button>
              </Link>

              <Link to="/about">
                <button className="box">
                  <BiUser class="icon" />
                  <h4>Angoda</h4>
                </button>
              </Link>

              <Link to="/about">
                <button className="box">
                  <BiUser class="icon" />
                  <h4>Nankunda</h4>
                </button>
              </Link>

              <Link to="/about">
                <button className="box">
                  <BiInfoCircle class="icon" />
                  <h4>About</h4>
                </button>
              </Link>

              {/* <Link to="/create">
                <button className="box">
                  <RiChatUploadLine class="icon" />
                  <h4>Create Post</h4>
                </button>
              </Link> */}

              {/* <button className="box">
                <RiContactsBookLine className="icon" />
                <h4>Contact</h4>
              </button> */}
            </div>
          )}
        </>
      </div>
    </div>
  );
};
