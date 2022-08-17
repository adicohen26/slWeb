import React from "react";
import SubjectCard from "./allServices/SubjectCard";


function AllServices(){
    return<div className="container" >
        <SubjectCard name="קורסים" img="desertWithBackground.jpg" link="/services/course"/>
        <SubjectCard name="סדנא משלבת הרצאה" img="desertWithBackground.jpg" link="/services/workshop"/>
        <SubjectCard name="דוכני בוטיק" img="desertWithBackground.jpg" link="/services/boutiqueBooth"/>
        <SubjectCard name="סדנאות" img="desertWithBackground.jpg" link="/"/>
        <SubjectCard name="הרצאות" img="desertWithBackground.jpg" link="/"/>
</div>
}

export default AllServices;