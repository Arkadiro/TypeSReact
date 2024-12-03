import { FC } from 'react';
import NewTodoItem from './componets/NewTodoItem/NewTodoItem';
import Todos from './componets/Todos/Todos';
import RoboContextPrivider from './store/robots-context';

const App: FC = () => {

  return (
    <RoboContextPrivider>
      <NewTodoItem ></NewTodoItem>
      <Todos />
    </RoboContextPrivider>
  );
}

export default App;
