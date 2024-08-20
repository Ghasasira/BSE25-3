import React from "react";
import "./footer.css";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <footer className="box">
        <div className="container flex">
          <p>© Joshua Ghasasira 2024</p>
          <div className="social">
            <div className="socialbtns">
              <a href="" className="socialbtn github">
                <BsGithub />
              </a>
              <a href="" className="socialbtn linkedin">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
