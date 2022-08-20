import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import GroupIcon from '@mui/icons-material/Group';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function Popup(props){
    function handelClick(e){
        e.stopPropagation();
    }
    function closePopup(){
        props.setIsOpen(false);
    }
    const popupInfo=props.selectedCard;
    console.log(popupInfo);

    return  <div className='popup-background' onClick={closePopup}>
        <div className='popup' onClick={handelClick}>
            <CloseIcon  onClick={closePopup}/>
            <h2 className='darkHeading'>{popupInfo.name}</h2>
            <h3 className='darkHeading'>{popupInfo.typeName}</h3>
            <hr/>
            <p style={{fontSize: "16px"}}>{popupInfo.discription}</p>
            <hr />
            <div className='popup-info-container'>
                <GroupIcon className='card-icon'/>
                <p> {popupInfo.participants} משתתפים</p>
            </div>
            <div className='popup-info-container'>
                <AccessAlarmIcon className='card-icon'/>
                <p> אורך הסדנא :</p>
            </div>
            <ul className='popup-info-options'>
                {popupInfo.duration.map((duration,index) => <li key={index} >{duration}</li>)}
            </ul>
            <div className='card-part-discription'> 
                <MenuBookIcon  className='card-icon'/>
                <p>מתכונים : </p>
            </div>
            <ul className='popup-info-options'>
            {/* {popupInfo.data.map((data,index) => <li key={index} >{data}</li>)} */}
            </ul>
        </div>
    </div>
}

export default Popup;