import { KenKenState, Modes } from './types';

const initialize = (): KenKenState => {
    return {
        cells: {},
        selected: null,
        options: {
            mode: Modes.VALUE,
            autoUpdateCandidates: true,
        },
    };
};
export default initialize;
