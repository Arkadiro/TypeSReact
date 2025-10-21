import { FC } from 'react';
import * as S from './ClasssComponentStyles';

const ClassComp: FC = () => {

    interface ElfInt {
        attack(): void;
    }

    interface PowerElfInt extends ElfInt {
        fireAttack(): void;
    }

    // Class
    class Elf implements PowerElfInt {
        constructor(public name: string, public weapon: string) {
            this.name = name;
            this.weapon = weapon;
        }

        attack() {
            return console.log('attacks with ' + this.weapon);
        }
        fireAttack() {
            return console.log('attacks with ' + this.weapon)
        }
    }

    const peter = new Elf('Peter', 'stones');
    const sam = new Elf('Sam', 'fire');

    Object.create({}, )

    peter.attack();
    sam.fireAttack();

    console.log(typeof peter);


    return (
        <S.ClassComp></S.ClassComp>
    )
}

export default ClassComp;