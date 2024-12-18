import { RefObject } from 'react';

interface TodoItemInterface {
    src: string;
    id?: number;
    ref?: RefObject<HTMLImageElement> | null;
    onRemoveRobot: () => void;
}

export type { TodoItemInterface };