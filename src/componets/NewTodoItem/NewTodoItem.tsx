import { FC, FormEvent, useContext, useRef } from 'react';
import * as S from './NewTodoItemStyles';
import { RoboContext } from '../../store/robots-context';


const NewTodoItem: FC = () => {

    const roboCtx = useContext(RoboContext);

    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const enteredText = todoInputRef.current?.value;
        roboCtx.addRobot(enteredText || '');
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