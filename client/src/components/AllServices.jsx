import React from "react";
import SubjectCard from "./allServices/SubjectCard";


function AllServices(){
    return<div className="section-container" >
        <SubjectCard name="קורסים" img="desertNoBackgrong.png" link="/services/course"/>
        <div className="small-cards-container">
           <SubjectCard name="סדנא משלבת הרצאה" img="desertNoBackgrong.png" link="/services/workshop" />
            <SubjectCard name="דוכני בוטיק" img="desertNoBackgrong.png" link="/services/boutiqueBooth" />
        </div>
            <div className="small-cards-container">
            <SubjectCard name="סדנאות" img="desertNoBackgrong.png" link="/"/>
            <SubjectCard name="הרצאות" img="desertNoBackgrong.png" link="/" />
        </div>
</div>
}

export default AllServices;