import { FC, useState } from 'react';
import NewTodoItem from './componets/Items/NewTodoItem/NewTodoItem';
import Todos from './componets/Items/Todos/Todos';
import SearchableList from './componets/Search/SearchableList';
import { IPlace, PLACES } from './componets/Search/SearchebleListContent';
import Place from './componets/Place/Place';

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
    <>
      <section>
        <NewTodoItem onAddRobot={addRobot}></NewTodoItem>
        <Todos items={robots} onRemoveRobot={removeRobot} />
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => (item as IPlace).id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={['item 1', 'item 2']} itemKeyFn={(item) => item as string}>
          {(item) => item}
        </SearchableList>
      </section>
    </>
  );
}

export default App;
