import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import {Link} from "react-router-dom";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import GroupIcon from '@mui/icons-material/Group';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CardContent from '@mui/material/CardContent';

import Fab from '@mui/material/Fab';
import { createTheme } from '@mui/material/styles';

function ServiceCard(props) {
  const theme1 = createTheme({
    palette: {
      primary: {
        main: '#3B5B66',
        contrastText: '#eff4f6'
      },
      secondary: {
        main: '##eff4f6',
        contrastText: '#3B5B66'
      },
    },
  }
  );
  const cardInfo=props.data;
  const shortDiscription=cardInfo.discription.substring(0,85);

  function handelClick(){
    props.openPopup(cardInfo);
  }
  return <Card className="cardsParent">
    <CardActionArea onClick={handelClick} >
      <CardMedia
        component="img"
        height="250rem"
        image={"../../images/desertWithBackground.jpg"}
        alt="courses"
      />
      <CardContent>
        <div className='card-header'>
          <h3 className='darkHeading'>{cardInfo.name}</h3>
          <h4 className='seconderyHeading'> לפרטים נוספים</h4>
          {/* <Fab variant="extended" color="primary" size="small" theme={theme1}>
                  פרטים נוספים
          </Fab> */}
          
        </div>

        <h5 className='darkHeading'> {shortDiscription} ... </h5>
        <hr style={{color:"#D4E1D8", width:"70%", borderTop: "dashed", borderBottom:"0px", marginTop:"15px" }}/>
       
        <div className='card-discription-flex-box'>
          <div className='card-part-discription'>
            <AccessAlarmIcon className='card-icon'/>
            <p>{cardInfo.previewDuration}</p>
          </div>
          <div className='card-part-discription'>
            <GroupIcon className='card-icon'/>
            <p>{cardInfo.participants} משתתפים</p>
          </div>
          <div className='card-part-discription'>
            <MenuBookIcon  className='card-icon'/>
            <p>1-2 מתכונים </p>
          </div>
          </div>
        
        
      </CardContent>

    </CardActionArea>
  </Card>
}

export default ServiceCard;