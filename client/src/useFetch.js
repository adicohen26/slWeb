import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [error,setError]=useState(null);
    const [data,setData]=useState(null);
    const [isPending,setPanding]=useState((true));
    useEffect(() => {
        fetch(url)
        .then((response) => {
            console.log(response);
            if(!response.ok){
                throw Error("could not fetch data");
            }
             return response.json()})
        .then((data) => {
            console.log(data);
            setData(data);
            setPanding(false);
        })
        .catch((err) => {
            console.log(err.message);
        });
    },[]);
    return {data, isPending, error};
}

export default useFetch;