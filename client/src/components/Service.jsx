import React from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";

function Service(props){
    const { service } = useParams();
    const url="http://localhost:5000/services/"+service;
    const {data,isPending,error}=useFetch(url);
    return <div>hiiiii</div>
}

export default Service;