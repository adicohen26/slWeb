import React from "react";
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { margin } from "@mui/system";

function SubjectCard(props){
  const imgUrl="../../images/"+props.img;
  let cssClasses="";

    return (<Card className="all-cards-container">
    <CardActionArea component={Link} to={props.link} >
      <CardMedia
        component="img"
        height="250rem"
        image={imgUrl}
        background-color="blue"
        alt="img"
      />
      <div className="overlay">
      <h1>{props.name}</h1>
      </div>
      
    </CardActionArea>
  </Card>);
  


}

export default SubjectCard;