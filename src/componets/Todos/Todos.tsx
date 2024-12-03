import { FC } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { ListItems } from './TodosStyles';
import { TodosInterface } from './TodosModel';

const Todos: FC<TodosInterface> = ({ items, onRemoveRobot }) => {

    return (
        <ListItems>
            {items.map((string, i) => (
                <TodoItem
                    src={string}
                    key={i}
                    onRemoveRobot={onRemoveRobot.bind(null, string)}
                />
            ))}
        </ListItems>
    );
}

export default Todos;