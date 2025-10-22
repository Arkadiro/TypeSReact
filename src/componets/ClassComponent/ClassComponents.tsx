import { FC } from 'react';
import * as S from './ClasssComponentStyles';

const ClassComp: FC = () => {

    interface CharacterInt {
        sleeps(): void;
    }

    // Class
    class Character implements CharacterInt {
        constructor(public name: string, public weapon: string) {
            this.name = name;
            this.weapon = weapon;
        }

        sleeps() {
            return console.log(this.name + ' sleeps');
        }
    }

    class Elf extends Character {
        constructor(public name: string, public weapon: string, public type: string) {
            super(name, weapon);
            this.type = type;
        }

        attack() {
            return console.log( 'attacks with ' + this.weapon);
        }
    }

    const peter = new Character('Peter', 'stones');
    const sam = new Elf('Sam', 'fire', 'forest');

    peter.sleeps();
    sam.attack();

    console.log(sam instanceof Elf);
    console.log(sam instanceof Character);

    return (
        <S.ClassComp></S.ClassComp>
    )
}

export default ClassComp;