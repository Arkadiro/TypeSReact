import { FC, useContext } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { ListItems } from './TodosStyles';
import { RoboContext } from '../../store/robots-context';

const Todos: FC = () => {

    const roboCtx = useContext(RoboContext);

    return (
        <ListItems>
            {roboCtx.items.map((src, i) => (
                <TodoItem
                    src={src}
                    key={i}
                    onRemoveRobot={roboCtx.removeRobot.bind(null, src)}
                />
            ))}
        </ListItems>
    );
}

export default Todos;