import React, { useState } from "react";

export default function User() {
    const [user, setUser] = useState("");
    const [greeting, setGreeting] = useState(false); //  성급하게 on/off 방식으로 했지만, 더 나은 방식으로 수정 필요.
    const date = new Date();
    const hours = date.getHours();

    // => 시간에 따라 다른 greeting 문구를 띄워 줌.
    const changeGreeting = () => {
        if (hours >= 5 && hours < 12) return `Good Morning`;
        else if (hours >= 12 && hours < 17) return `Good Afternoon`;
        else return `Good Evening`;
    };

    // => submit이벤트가 발생했을 때, input value를 user state에 저장하고, greeting state를 true로 설정하여 input view대신 greeting view를 띄워줌.
    const submitHandler = (e) => {
        e.preventDefault();
        setGreeting(true);
        setUser(e.target.querySelector("input").value);
        e.target.style.border = "none";
    };

    return (
        <form className="greeting" onSubmit={submitHandler}>
            {greeting ? <h2>{`${changeGreeting()}, ${user}.`}</h2> : <input type="text" placeholder={"Hello, What's your name?"}></input>}
        </form>
    );
}
