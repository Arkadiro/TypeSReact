import { FC } from 'react';
import * as S from './ConstFunStyles';

const ConstFun: FC = () => {

    interface ElfInt {
        name: string; 
        weapon: string;
        attack(): void;
    }

    // Constructor function

    function Elf(this:ElfInt, name: string, weapon: string) {
        this.name = name;
        this.weapon = weapon;
    }

    Elf.prototype.attack = function () {

        return console.log('attacks with ' + this.weapon);
    }
    // TODO : refactor any
    const peter = new (Elf as any)('Peter', 'stones');
    const sam = new (Elf as any)('Sam', 'fire');

    sam.attack();
    peter.attack();


    return (
        <S.ConstFun></S.ConstFun>

    )
}

export default ConstFun;