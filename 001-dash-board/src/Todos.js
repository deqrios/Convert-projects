import React, { useState, useRef } from "react";

export default function Todos() {
    const [users, setUsers] = useState([]);
    const [inputs, setInputs] = useState({});
    const nextId = useRef(0);
    const { text } = inputs;

    const onCreate = (e) => {
        e.preventDefault();
        if (text !== "") {
            const user = {
                id: nextId.current,
                text,
            };
            setUsers([...users, user]);
            nextId.current += 1;
        }
        console.log(users);

        setInputs({
            text: "",
        });
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onRemove = (id) => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // user.id 가 id 인 것을 제거함
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <>
            <CreateUser text={text} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} />
        </>
    );
}

function User({ user, onRemove }) {
    return (
        <div>
            <span>{user.text}</span>
            <button onClick={() => onRemove(user.id)}>&times;</button>
        </div>
    );
}

function UserList({ users, onRemove }) {
    return (
        <>
            {users.map((user) => {
                if (user.text !== "") return <User user={user} key={user.id} onRemove={onRemove} />;
            })}
        </>
    );
}

function CreateUser({ text, onChange, onCreate }) {
    return (
        <form onSubmit={onCreate}>
            <input name="text" placeholder="Todo" onChange={onChange} value={text} />
        </form>
    );
}
