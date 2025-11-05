import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoSidebar from "../../../assets/Images/LogoSidebar.png";


const SidebarContainer = styled.div`
  width: 250px;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const SidebarItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #444;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth <= 768);

      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [index, setindex] = useState(0);

  const handleChangeIndex = (p) => {
    if (window.innerWidth <= 768) {
      setindex(p);
      setIsOpen(!isOpen);
    } else {
      setindex(p);
    }
  };

  return (
    <>
      {showButton && (
        <div className="ahti" style={{ position: "fixed", top: "0" }}>

          <input type="checkbox" id="checkbox" onClick={() => {
            toggleSidebar();
          }} />
          <label for="checkbox" class="toggle">
            <div class="bars" id="bar1"></div>
            <div class="bars" id="bar2"></div>
            <div class="bars" id="bar3"></div>
          </label>
        </div>
      )}

      <div
        className="side-bar-container-thiviyo"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="fix-side-box">

          <div className="Logo-Sidebar">
            <img src={LogoSidebar} alt="" />
          </div>
          <div className="sidebar-head">
          <Link
            to=""
            className="none-list"
            onClick={() => handleChangeIndex(0)}
          >
            <div className="side-bar-item-child change">
             {" "}
            Payment details
            </div>
          </Link>

          <Link
            className="none-list"
            to="ScheduleDate"
            onClick={() => handleChangeIndex(2)}
          >
            <div className="side-bar-item-child">
            Schedule Date
            </div>
          </Link>
</div>
      

     

      
          
        </div>
      </div>
    </>
  );
};

export default Sidebar;


