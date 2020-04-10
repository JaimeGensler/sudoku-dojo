import { produceWithPatches } from 'immer';

enum HighlightTypes {
    SELECTED = 'SELECTED',
    ERROR = 'ERROR',
}
interface Props {
    highlight: HighlightTypes;
}

const converter = {
    SELECTED: 'rgb(52, 152, 219)',
    ERROR: 'rgb(225, 23, 23)',
};

export const fillFore = ({ highlight }: Props) => {
    return highlight ? 'white' : 'black';
};
export const fillBack = ({ highlight }: Props) => {
    return highlight ? converter[highlight] : 'lightgray';
};
export const ghostFore = ({ highlight }: Props) => {
    return highlight ? converter[highlight] : 'black';
};
export const ghostBack = ({ highlight }: Props) => {
    if (highlight === 'SELECTED') return 'rgba(52, 152, 219, 0.2)';
    if (highlight === 'ERROR') return 'rgba(225, 23, 23, 0.2)';
    return 'white';
};
