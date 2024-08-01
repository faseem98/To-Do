import React, {useRef} from 'react';

import './NewTodo.css';

interface NewTodoProps {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
        textInputRef.current!.value = ''; // Clear input field
    }


    return (
    <form onSubmit={todoSubmitHandler}>
        <div className='form-control'>
            <label htmlFor='todo-text'>TODO APPLICATION</label>
            <input type='text' id='todo-text' ref={textInputRef} />
        </div>
        <button type='submit'>ADD TODO</button>
    </form>
  )
}

export default NewTodo;
