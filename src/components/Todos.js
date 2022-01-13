import React from 'react';
import { useState } from 'react';

const Todos = ({todos, onCreate, onToggle, onRemove}) => {
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
                            <li key={todo.id} id={todo.id} onClick={() => onToggle(todo.id)}>
                                <span style={{textDecoration: todo.done? 'line-through':'none'}}>{todo.text}</span> <a style={{color: 'red'}} onClick={()=>onRemove(todo.id)}>X</a>
                            </li>)  // 태그의 attribute로 style을 주고 싶을 때, style을 객체 형태로 작성해야 하므로 중괄호를 겹쳐 사용한다.
                    }
                </ul>
            </div>
        </div>
    );
};

export default Todos;