import { createContext, FC, useState } from 'react';
import { RobotsItemInterface } from '../componets/Robots/RobotsModel';

interface InitialContextObjI extends RobotsItemInterface {
    addRobot: (src: string) => void;
};

class InitialContextObj implements InitialContextObjI {
    items = [];
    addRobot = () => { };
    removeRobot = () => { };
};

export const RoboContext = createContext<InitialContextObjI>(new InitialContextObj());

const RoboContextPrivider: FC = ({ children }) => {

    const url = 'https://robohash.org/rob';

    const [robots, setRobots] = useState<string[]>([]);

    const addRobotHandler = (src: string) => {
        setRobots(
            (robots) => [...robots, `${url + src}`]
        );
    };

    const removeRobotHandler = (src: string) => {
        setRobots(
            (robots) => [...robots.filter((e) => e !== src)]
        );
    };

    const contextValue: InitialContextObjI = {
        items: robots,
        addRobot: addRobotHandler,
        removeRobot: removeRobotHandler
    }

    return (
        <RoboContext.Provider value={contextValue}>
            {children}
        </RoboContext.Provider>
    )

};

export default RoboContextPrivider;