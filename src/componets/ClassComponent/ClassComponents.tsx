import { FC } from 'react';
import * as S from './ClasssComponentStyles';

const ClassComp: FC = () => {

    interface CharacterInt {
        attack(): void;
    }

    // Class
    class Character implements CharacterInt {
        constructor(public name: string, public weapon: string) {
            this.name = name;
            this.weapon = weapon;
        }

        attack() {
            return console.log('attacks with ' + this.weapon);
        }
    }

    class Elf extends Character {
        constructor(public name: string, public weapon: string, public type: string) {
            super(name, weapon);
            this.type = type;
        }
    }

    const peter = new Character('Peter', 'stones');
    const sam = new Elf('Sam', 'fire', 'forest');

    peter.attack();
    sam.attack();

    return (
        <S.ClassComp></S.ClassComp>
    )
}

export default ClassComp;