import React from "react";
import classes from "./Main.module.css";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  FolderOutlined,
  MailOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import Typed from "react-typed";

const Main = () => {
  const projects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className={classes.main}>
        <div className={classes.background}></div>
        <div className={classes.mainTitle}>
          Hello, I'm{" "}
          <span className={classes.mainSpan}>
            <Typed strings={[ "Jakub" ]} typeSpeed={300}></Typed>
          </span>
        </div>
        <div className={classes.mainNav}>
          <Link to="/">
            <div className={classes.underline}>
              <HomeOutlined /> Home
            </div>
          </Link>
          <div className={classes.underline} onClick={projects}>
            <FolderOutlined /> projects
          </div>
          <div className={classes.underline}>
            <MailOutlined /> contact
          </div>
        </div>
        <div className={classes.downArrow}>
          <CaretDownOutlined />
        </div>
      </div>
    </div>
  );
};

export default Main;
