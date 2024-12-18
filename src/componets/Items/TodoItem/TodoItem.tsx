import { FC } from 'react';
import { TodoItemInterface } from './TodoItemModel';
import * as S from './TodoItemStyles';

const Todo: FC<TodoItemInterface> = ({ src, onRemoveRobot }) => {
    return (
        <S.ListItem src={src} onClick={onRemoveRobot} />
    )
}

export default Todo;