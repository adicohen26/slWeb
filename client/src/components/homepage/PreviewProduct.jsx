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
    return <div className="previewProduct">
        <div className="stack-elements-container">
          <div className="preview-heading-container">
            <h1>{item.typeName}</h1>
          </div>
          <div className="circle">
          <img src={imgSrc} alt="תמונת מוצר" />

          </div>
          {/* <div className="img-container"> */}
          {/* </div> */}
        </div>
        <div className="productDiscription">
            <h4 className="darkHeading">{item.name}</h4>
            {item.benefits.map((benefit,index) => <p className="darkHeading" key={index}>{benefit}</p>)}
            <Fab variant="extended" color="primary" size="small" theme={theme}>
                 לכל  {item.typeName}
            </Fab>
            <Fab variant="extended" color="secondary" size="small" theme={theme}>
             {item.productName}
            </Fab>
        </div>
    </div>

}

export default PreviewProduct;