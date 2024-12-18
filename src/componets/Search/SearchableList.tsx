import { ChangeEvent, FC, ReactNode, useRef, useState } from 'react';
import * as S from './SearchableListStyles';
import { IPlace } from './SearchebleListContent';


interface SearchableListInterface {
    items: Array<IPlace | string>;
    itemKeyFn: (data: IPlace | string) => string;
    children: (data: IPlace | string) => ReactNode;
}

const SearchableList: FC<SearchableListInterface> = ({ items, itemKeyFn, children }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const lastChange = useRef<ReturnType<typeof setTimeout> | null>(null);

    const searchResults = items.filter(item => {
        return JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handlechange = (event: ChangeEvent<HTMLInputElement>) => {
        if (lastChange.current) {
            clearTimeout(lastChange.current);
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            setSearchTerm(event?.target?.value);
        }, 500)

    };

    return (
        <S.SearchableList >
            <S.Search type='search' placeholder='Search' onChange={handlechange} />
            <S.List>
                {searchResults.map((item) =>
                    <S.ListItem key={itemKeyFn(item)}>
                        {children(item)}
                    </S.ListItem>
                )}
            </S.List>
        </S.SearchableList>
    );
}


export default SearchableList;