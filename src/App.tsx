import { FC, useState } from 'react';
import NewTodoItem from './componets/NewTodoItem/NewTodoItem';
import Todos from './componets/Todos/Todos';
import ConstFun from './componets/Constructor/ConstFun';

const url = 'https://robohash.org/rob';


const App: FC = () => {
  const [robots, setRobots] = useState<string[]>([]);

  const addRobot = (st: string) => {
    setRobots(
      (robots) => [...robots, `${url + st}`]
    );
  };

  const removeRobot = (st: string) => {
    setRobots(
      (robots) => [...robots.filter((e) => e !== st)]
    );
  };

  return (
    <div>
      <NewTodoItem onAddRobot={addRobot}></NewTodoItem>
      <Todos items={robots} onRemoveRobot={removeRobot} />
      <ConstFun></ConstFun>
    </div>
  );
}

export default App;
