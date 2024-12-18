import { FC } from 'react';
import { RobotItemInterface } from './RobotItemModel';
import * as S from './RobotItemStyles';

const RobotItem: FC<RobotItemInterface> = ({ src, onRemoveRobot }) => {
    return (
        <S.RobotItem src={src} onClick={onRemoveRobot} />
    )
}

export default RobotItem;