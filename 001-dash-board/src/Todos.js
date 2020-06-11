import React, { useState, useRef } from "react";

// TODO - 여러개의 파일로 나누거나, 병합해서 하나의 컴포넌트로 최적화가 필요.

// => todo객체와 onRemove함수를 받아, todo text를 띄워주고, onRemove를 기능을 하는 button tag를 생성, element들을 return.
function Todo({ todo, onRemove }) {
    return (
        <div>
            <span>{todo.text}</span>
            <button onClick={() => onRemove(todo.id)}>&times;</button>
        </div>
    );
}

// => todos 객체배열과 onRemove를 받아, todos에 있는 객체 하나하나를 Todo 컴포넌트로 넘겨 줌. Todo 컴포넌트를 return.
function TodoList({ todos, onRemove }) {
    return (
        <>
            {todos.map((todo) => (
                <Todo todo={todo} key={todo.id} onRemove={onRemove} />
            ))}
        </>
    );
}

// => 비구조화 할당 받은 text와 onChange, onCreate함수를 받아, 아래의 element들을 return.
function CreateTodo({ text, onChange, onCreate }) {
    return (
        <form onSubmit={onCreate}>
            <input name="text" placeholder="Todo" onChange={onChange} value={text} />
        </form>
    );
}

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [inputs, setInputs] = useState({});
    const nextId = useRef(0); // react에서 DOM을 직접 다룰 수 있게 해주는 Hook. 하지만 이런 방식으로 update되는 값을 현재 컴포넌트에 알려줄 수 있음.(.current로 현재 값 접근)
    const { text } = inputs; // 비구조화 할당. object에서 요소를 꺼내 변수에 할당 함.

    // => SubmitHandler. text값이 공백이 아니면 id와 text를 담아서, 스프레드 문법을 이용해 전에 있던 todos state와 새로운 todo를 state에 저장.
    // => 그리고 input text를 공백으로 설정, nextId의 현재 값을 1 증가.
    const onCreate = (e) => {
        e.preventDefault();

        if (text !== "") {
            const todo = {
                id: nextId.current,
                text,
            };
            setTodos([...todos, todo]);
            nextId.current += 1;
        }

        setInputs({
            text: "",
        });
    };

    // => input tag에 onChange이벤트 발생 시, name, value를 비구조화 할당으로 변수에 할당하고, inputs를 통합하여 갱신.
    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    // => button tag onClick이벤트 발생 시, 이벤트 발생 한 태그의 todo.id를 통해 filter메소드로 걸러서 todos state를 갱신.
    const onRemove = (id) => {
        // todo.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // todo.id 가 id 인 것을 제거함
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <>
            <CreateTodo text={text} onChange={onChange} onCreate={onCreate} />
            <TodoList todos={todos} onRemove={onRemove} />
        </>
    );
}
