import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import GroupIcon from '@mui/icons-material/Group';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PhotoCarousel from './PhotoCarousel';
import { useSpring, animated } from 'react-spring';

function Popup(props){
    function handelClick(e){
        e.stopPropagation();
    }
    function closePopup(){
        props.setIsOpen(false);
    }
    const popupInfo=props.selectedCard;
    
    return  <div className='popup-background' onClick={closePopup}>
         <animated.div style={props.animation}>
        <div className='popup' onClick={handelClick}>
            <CloseIcon  onClick={closePopup}/>
            <div className='popup-container'>
                <PhotoCarousel data={popupInfo.imgName}/>
                <div className='popup-text-area'>
                    <h2 className='darkHeading'>{popupInfo.name}</h2>
                    <h3 className='darkHeading'>{popupInfo.typeName}</h3>
                    <p className='darkHeading' style={{fontSize:"16px" ,padding:"0px 0 10px 0"}}>בחרו כמה זמן נבלה יחד ואיזה מתכונים תרצו שנלמד </p>
                </div>
            </div>
                    <hr/>
                    <p style={{fontSize: "16px"}} className="popup-service-description darkHeading">{popupInfo.discription}</p>
                    <hr />
                    <div className='popup-info-container'>
                        <GroupIcon className='card-icon'/>
                        <h4 className='darkHeading'> {popupInfo.participants} משתתפים</h4>
                    </div>
                    <div className='popup-info-container'>
                        <AccessAlarmIcon className='card-icon'/>
                        <h4 className="darkHeading"> אורך הסדנא :</h4>
                    </div>
                    <ul className='popup-info-options darkHeading'>
                        {popupInfo.duration.map((duration,index) => <li key={index} >{duration}</li>)}
                    </ul>
                    <div className='card-part-discription'> 
                        <MenuBookIcon  className='card-icon'/>
                        <h4 className="darkHeading">מתכונים : </h4>
                    </div>
                        <ul className='popup-info-options darkHeading'>
                        {(popupInfo.type === "course") && popupInfo.specificData.workshops.map((data,index) => <li key={index} >{data}</li>)}
                        {!(popupInfo.type === "course") && popupInfo.specificData.recpies.map((data,index) => <li key={index} >{data}</li>)}
                        </ul>
                    </div>
            
        
        </animated.div>
    </div>
}

export default Popup;