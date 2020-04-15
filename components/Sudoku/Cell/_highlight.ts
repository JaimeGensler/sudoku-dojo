type Strum = number | string;
interface Props {
    highlight: Strum[];
}

const converter = {
    SELECTED: 'rgb(52, 152, 219)',
    ERROR: 'rgb(225, 23, 23)',
    BOTH: 'rgb(173, 129, 196)',
};

// 225 - 52;
// 152 - 23;
// 219 - 23;

export const givenFore = ({ highlight }: Props) => {
    return highlight.length === 0 ? 'black' : 'white';
};
export const givenBack = ({ highlight }: Props) => {
    if (highlight.includes('SELECTED') && highlight.length > 1) {
        return converter.BOTH;
    } else if (highlight.includes('SELECTED')) {
        return converter.SELECTED;
    } else if (highlight.length > 0) {
        return converter.ERROR;
    }
    return 'lightgray';
};
export const ghostFore = ({ highlight }: Props) => {
    if (highlight.includes('SELECTED') && highlight.length > 1) {
        return converter.BOTH;
    } else if (highlight.includes('SELECTED')) {
        return converter.SELECTED;
    } else if (highlight.length > 0) {
        return converter.ERROR;
    }
    return 'black';
};
export const ghostBack = ({ highlight }: Props) => {
    if (highlight.includes('SELECTED') && highlight.length > 1) {
        return 'rgba(173, 129, 196, 0.2)';
    } else if (highlight.includes('SELECTED')) {
        return 'rgba(52, 152, 219, 0.2)';
    } else if (highlight.length > 0) {
        return 'rgba(225, 23, 23, 0.2)';
    }
    return 'white';
};
