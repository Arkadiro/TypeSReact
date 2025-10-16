import { FC } from 'react';
import { TodoItemInterface } from './NewCompModel';
import * as S from './NewCompStyles';

interface ElfInterface {
    name: string;
    weapon: string;
};

interface ElfInterfaceAttack extends ElfInterface {
    attack: () => void;
}

const NewComp: FC = () => {

    // factory functions
    const elfFunctions: ElfInterfaceAttack = {
        attack() {

            return console.log('attacks with ' + this.weapon);
        },
        name: '',
        weapon: ''
    }

    const createElf = (name: string, weapon: string): ElfInterfaceAttack => {
        let newElf = Object.create(elfFunctions);
        newElf.name = name;
        newElf.weapon = weapon
        return (
            newElf
        )
    }

    const peter: ElfInterfaceAttack = createElf('Peter', 'stones');
    const sam: ElfInterfaceAttack = createElf('Sam', 'fire');

    sam.attack();
    peter.attack();

    return (
        <S.NewComp></S.NewComp>

    )
}

export default NewComp;