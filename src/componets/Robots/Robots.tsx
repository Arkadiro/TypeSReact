import { FC, useContext } from 'react';
import RobotItem from '../RobotItem/RobotItem';
import { RobotItems } from './RobotsStyles';
import { RoboContext } from '../../store/robotsContext';
import NewRobotItem from '../AddNewRobot/AddNewRobot';

const Robots: FC & {NewRobotItem: FC} = () => {

    const roboCtx = useContext(RoboContext);

    return (
        <RobotItems>
            {roboCtx.items.map((src, i) => (
                <RobotItem
                    src={src}
                    key={i}
                    onRemoveRobot={roboCtx.removeRobot.bind(null, src)}
                />
            ))}
        </RobotItems>
    );
}

Robots.NewRobotItem = NewRobotItem;

export default Robots;