import React, { useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Popup from "./Popup";

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
    
    (data && console.log(data));

    return <div className="container">
        {isPending && <h1>loading ..</h1>}
        {data && <h2 className="darkHeading">{data[0].typeName}</h2>}
        {data && data.map((data,index) => <ServiceCard key={index} data={data} id={data.name} openPopup={openPopup}/>)}
        {isOpen && <Popup isOpen={isOpen} setIsOpen={setIsOpen} selectedCard={selectedCard}/>}
    </div>
}

export default Service;