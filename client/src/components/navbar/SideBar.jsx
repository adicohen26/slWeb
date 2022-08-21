import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

function SideBar(props) {
    function toggle(){
      props.toggle();
    }
    if(props.isOpen)
    {
    return (
      <div className='side-bar-container'>
        <div className='head'>
            <CloseIcon className='icon' onClick={toggle}/>
        {/* <div className="logo">שרון ולירון</div> */}
        </div>
        <div className="side-bar-wrapper">
            <div className='side-bar-menu'>
                <a className='side-bar-link' href="/#about" onClick={toggle}>
                    אודות
                </a>
                <a className='side-bar-link' href="/services" onClick={toggle}>
                    כל החוויות שלנו
                </a>
                <a className='side-bar-link-sub' href="/services/course" onClick={toggle}>
                    קורסים
                </a>
                <a className='side-bar-link-sub' href="/services/workshop" onClick={toggle}>
                 סדנא משלבת הרצאה
                </a>
                <a className='side-bar-link-sub' href="/services/boutiqueBooth" onClick={toggle}>
                    דוכני בוטיק
                </a>
                <a className='side-bar-link-sub' href="/" onClick={toggle}>
                    סדנאות
                </a>
                <a className='side-bar-link-sub' href="/" onClick={toggle}>
                    הרצאות
                </a>
                <a className='side-bar-link' href="/" onClick={toggle}>
                    צור קשר
                </a>
            </div>
        </div>
      </div>
    )}else{
        return <div></div>
    }
  }

export default SideBar;