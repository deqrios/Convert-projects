import React from "react";
import Weather from "./Weather";
import Clock from "./Clock";
import User from "./User";
import Todos from "./Todos";

// => 1부터 3까지 랜덤한 수를 생성하여 그에 맞는 img파일을 body에 배경으로 뿌림.
function random_img() {
    const id = Math.floor(Math.random() * 3);
    const image = new Image();

    image.src = `images/${id + 1}.jpg`;
    image.classList.add("bg");
    document.body.prepend(image);
}

export default function App() {
    random_img();

    return (
        <>
            <Weather />
            <Clock />
            <User />
            <Todos />
        </>
    );
}
