import { FC } from 'react';
import { IPlace } from '../Search/SearchebleListContent';
import * as S from './PlaceStyles';

interface PlaceInt {
    item: IPlace | string
}


const Place: FC<PlaceInt> = ({ item }) => {

    return (
        <S.Place>
            <S.PlaceImage src={(item as IPlace).image} alt={(item as IPlace).title} />
            <div>
                <S.PlaceTitle>{(item as IPlace).title}</S.PlaceTitle>
                <S.PlaceDescription>{(item as IPlace).description}</S.PlaceDescription>
            </div>
        </S.Place>
    );
}

export default Place