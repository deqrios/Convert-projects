import React, { useState, useEffect } from "react";

export default function Clock(props) {
    const [date, setDate] = useState(new Date());
    const hours = date.getHours();
    const minutes = date.getMinutes();
    props.getHours(hours); //  parent에 hours data 전달.

    useEffect(() => {
        //  nametag로 return(willunmount)에서 비동기 해제.
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>{`${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes}`}</h1>
        </div>
    );
}
