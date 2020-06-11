import React, { useState, useEffect } from "react";

export default function Clock() {
    const [date, setDate] = useState(new Date()); //  state 생성, 현재 Date로 init
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // => did mount 됐을 때 비동기 함수 setInterval로 state를 1초마다 새로운 Date로 update.
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
