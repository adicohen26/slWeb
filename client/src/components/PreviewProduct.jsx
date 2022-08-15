import React from "react";
import Fab from '@mui/material/Fab';
import { createTheme } from '@mui/material/styles';

function PreviewProduct(props){
    const theme = createTheme({
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
    const item=props.previewItem;
    const imgSrc="../../images/"+item.imgName;
    console.log(imgSrc);
    return <div className="previewProduct">
        <h1>{item.type}</h1>
        <div className="circle"></div>
        <img src={imgSrc} alt="תמונת מוצר" />
        <div className="productDiscription">
            <h4 className="darkHeading">{item.name}</h4>
            {item.benefits.map(benefit => <p className="darkHeading">{benefit}</p>)}
            <Fab variant="extended" color="primary" size="small" theme={theme}>
                 לכל  {item.type}
            </Fab>
            <Fab variant="extended" color="secondary" size="small" theme={theme}>
             {item.productName}
            </Fab>
        </div>
    </div>

}

export default PreviewProduct;