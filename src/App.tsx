import { FC } from 'react';
import Robots from './componets/Robots/Robots';
import RoboContextPrivider from './store/robotsContext';

const App: FC = () => {

  return (
    <RoboContextPrivider>
      <Robots.NewRobotItem />
      <Robots />
    </RoboContextPrivider>
  );
}

export default App;
