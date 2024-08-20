import React from "react";
import "./about.css";

export const About = () => {
  return (
    <>
      <section className="aboutSection">
        <h1 className="pageTitle">About Us</h1>
        <div className="content first">
          <div className="description">
            <h2>Know more about Group 3</h2>
          </div>
          <div className="textBox">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            
          </div>
        </div>

        <div className="content second">
          <div className="textBox">
            <p>
              We are a team of dedicated Software students in various fields and areas plus with varrying sets of skills in this big and ever-growing universe/world of software development
            </p>
            <div>
              {/* <h2>The Team</h2> */}
              <ul>
                <li>Agani Daniel Strong</li>
                <li>Angoda Brian Angoda</li>
                <li>Gasasira Joshua</li>
                <li>Nankunda Josephine</li>
              </ul>
            </div>
          </div>
          <div className="description">
            <h2>Meet the Developers</h2>
          </div>
        </div>

        <div className="content first">
          <div className="description">
            <h2>Mission-Vision</h2>
          </div>
          <div className="textBox">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
