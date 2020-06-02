import React, { useState } from "react";

export default function User(props) {
    const [user, setUser] = useState("");
    const [greeting, setGreeting] = useState(false);
    function changeGreeting(props) {
        const hours = props.hours;
        if (hours >= 5 && hours < 12) return `Good Morning`;
        if (hours <= 12 && hours < 17) return `Good Afternoon`;
        return `Good Evening`;
    }

    return (
        <form
            className="greeting"
            onSubmit={(e) => {
                e.preventDefault();
                setGreeting(true);
                setUser(e.target.querySelector("input").value);
                e.target.style.border = "none";
            }}
        >
            {greeting ? <h2>{`${changeGreeting(props)}, ${user}.`}</h2> : <input type="text" placeholder={"Hello, What's your name?"}></input>}
        </form>
    );
}
