import { FC, FormEvent, useRef } from 'react';
import * as S from './NewTodoItemStyles';

interface NewTodoItemInter {
    onAddRobot: (e: string) => void
}


const NewTodoItem: FC<NewTodoItemInter> = ({ onAddRobot }) => {

    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const enteredText = todoInputRef.current?.value;
        onAddRobot(enteredText ?? '');
    };

    return (
        <S.Form onSubmit={submitHandler}>
            <S.Label htmlFor='text'>Todo text</S.Label>
            <S.Input type='text' id='text' ref={todoInputRef} />
            <S.Button>Add Todo</S.Button>
        </S.Form>
    )
};

export default NewTodoItem;