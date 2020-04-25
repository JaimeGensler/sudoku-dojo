const converter = {
    SELECTED: 'rgb(52, 152, 219)',
    ERROR: 'rgb(225, 23, 23)',
    BOTH: 'rgb(173, 129, 196)',
};

// 225 - 52;
// 152 - 23;
// 219 - 23;

export const givenFore = ({ highlight }: { highlight: string }) => {
    return highlight === 'NONE' ? 'black' : 'white';
};
export const givenBack = ({ highlight }: { highlight: string }) => {
    if (highlight === 'BOTH') {
        return converter.BOTH;
    } else if (highlight === 'SELECTED') {
        return converter.SELECTED;
    } else if (highlight === 'ERROR') {
        return converter.ERROR;
    }
    return 'lightgray';
};
export const bigFore = ({ highlight }: { highlight: string }) => {
    if (highlight === 'BOTH') {
        return converter.BOTH;
    } else if (highlight === 'SELECTED') {
        return converter.SELECTED;
    } else if (highlight === 'ERROR') {
        return converter.ERROR;
    }
    return 'black';
};
export const bigBack = ({ highlight }: { highlight: string }) => {
    if (highlight === 'BOTH') {
        return 'rgba(173, 129, 196, 0.2)';
    } else if (highlight === 'SELECTED') {
        return 'rgba(52, 152, 219, 0.2)';
    } else if (highlight === 'ERROR') {
        return 'rgba(225, 23, 23, 0.2)';
    }
    return 'white';
};

export const littleFore = ({ highlight }: { highlight: string }) => {
    if (highlight === 'BOTH') {
        return converter.BOTH;
    } else if (highlight === 'SELECTED') {
        return converter.SELECTED;
    } else if (highlight === 'ERROR') {
        return converter.ERROR;
    }
    return 'dimgray';
};
