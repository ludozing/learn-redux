import React from 'react';
import { useState } from 'react';

const Todos = ({todos, onCreate, onToggle}) => {
    // input에 입력되는 값을 관리하는 상태
    const [text, setText] = useState('');
    // input의 값이 변경될 때 실행하는 함수
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(text);
        setText('');
    }
    const onClick = (e) => {
        onToggle(parseInt(e.target.id));
    }
    return (
        <div>
            <h1>Todolist</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} value={text} />
                    <button type='submit'>등록</button>
                </form>
                <ul>
                    {
                        todos.map(todo =>
                            <li style={{textDecoration: todo.done? 'line-through':'none'}} key={todo.id} id={todo.id} onClick={onClick}>
                                {todo.text}
                            </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Todos;