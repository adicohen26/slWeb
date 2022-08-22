import React, { useState } from "react";
import useFetch from "../../useFetch";
import { useParams } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Popup from "./Popup";
import { useSpring, animated } from 'react-spring';

function Service(props){
    const { service } = useParams();
    const url="http://localhost:5000"+"/services/"+service;
    const {data,isPending,error}=useFetch(url);
    const [isOpen,setIsOpen]=useState(false);
    const [selectedCard, setSelectedCard]=useState("");
    
    function openPopup(cardInfo){
        setSelectedCard(cardInfo);
        setIsOpen(true);
    }
    const animation = useSpring({
        config: {
          duration: 250
        },
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? `translateY(0%)` : `translateY(-80%)`
      });

    return <div className="section-container">
        {isPending && <h1>loading ..</h1>}
        {data && <h2 className="darkHeading">{data[0].typeName}</h2>}
        <div className="service-card-container">
            {data && data.map((data,index) => <ServiceCard key={index} data={data} id={data.name} openPopup={openPopup}/>)}
        </div>
        {isOpen && <Popup isOpen={isOpen} setIsOpen={setIsOpen} selectedCard={selectedCard} animation={animation}/>}
    </div>
}

export default Service;