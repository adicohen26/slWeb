import React from "react";
import SubjectCard from "../SubjectCard";


function AllServices(){
    return<div className="container" >
        <SubjectCard name="קורסים" img="desertWithBackground.jpg" link="/"/>
        <SubjectCard name="סדנא משלבת הרצאה" img="desertWithBackground.jpg" link="/"/>
        <SubjectCard name="דוכן בוטיק" img="desertWithBackground.jpg" link="/"/>
        <SubjectCard name="סדנא" img="desertWithBackground.jpg" link="/"/>
        <SubjectCard name="הרצאה" img="desertWithBackground.jpg" link="/"/>
</div>
}

export default AllServices;