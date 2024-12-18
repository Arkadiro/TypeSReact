import { FC, FormEvent, useContext, useRef } from 'react';
import * as S from './AddNewRobotStyles';
import { RoboContext } from '../../store/robotsContext';


const NewRobotItem: FC = () => {

    const roboCtx = useContext(RoboContext);

    const robotInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const enteredText = robotInputRef.current?.value;
        roboCtx.addRobot(enteredText || '');
    };

    return (
        <S.Form onSubmit={submitHandler}>
            <S.Label htmlFor='text'>enter text to add Robot</S.Label>
            <S.Input type='text' id='text' ref={robotInputRef} />
            <S.Button>Add Robot</S.Button>
        </S.Form>
    )
};

export default NewRobotItem;