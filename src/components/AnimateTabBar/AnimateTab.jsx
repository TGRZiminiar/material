import React from 'react'
import "./AnimateTab.css"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';

function AnimateTabJS() {
    
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu__item") ;
    const menuBorder = document.querySelector(".menu__border");
    let activeItem = document.querySelector(".active");
    const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];

    function clickItem(item, index) {
  
      menu.style.removeProperty("--timeOut");
      
      if (activeItem == item) return;
      
      if (activeItem) {
          activeItem.classList.remove("active");
      }
      
      item.classList.add("active");
      activeItem = item;
      offsetMenuBorder(activeItem, menuBorder);
      
  }
    function offsetMenuBorder(element, menuBorder) {
      if(!element) return;
      const offsetActiveItem = element.getBoundingClientRect();
      const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
      menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
  
    }
  
    offsetMenuBorder(activeItem, menuBorder);
  
  
    // console.log(typeof(menuItems))
    menuItems && menuItems.forEach((item, index) => {
      item.addEventListener("click", () => clickItem(item, index));
      
    })
  
    return (
        <div className="w-full flex justify-center align-center">
        <menu className="menu">
        
        <button className="menu__item" style={{"--bgColorItem":"#f54888"}}>
          <ReorderOutlinedIcon className="text-white icon " style={{fontSize:"2rem"}}/>
        </button>
    
        <button className="menu__item " style={{"--bgColorItem":"#ff96bd"}}>
          <InboxOutlinedIcon className="text-white icon" style={{fontSize:"2rem"}}/>
        </button>
    
        <button className="menu__item " style={{"--bgColorItem":"#9999fb"}}>
          <LayersOutlinedIcon className="text-white icon" style={{fontSize:"2rem"}}/>
        </button>
    
        <button className="menu__item " style={{"--bgColorItem":"#ffe797"}}>
          <ListAltOutlinedIcon className="text-white icon" style={{fontSize:"2rem"}}/>
        </button>
       
        <button className="menu__item " style={{"--bgColorItem":"#cffff1"}}>
          <BrokenImageOutlinedIcon className="text-white icon" style={{fontSize:"2rem"}}/>
        </button>
       
    
    
        <div className="menu__border"></div>
    
      </menu>
    
      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5" >
          <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
            <path  d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
              c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
              c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
          </clipPath>
        </svg>
      </div>    
        </div>
  )
}

export default AnimateTabJS;