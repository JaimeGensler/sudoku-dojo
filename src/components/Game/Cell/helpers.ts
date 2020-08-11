import { computed } from 'vue';
import { SudokuCell } from '../../../lib/types';

export const getCellIndex = ({
    blockIndex,
    blockSubIndex,
}: {
    blockIndex: number;
    blockSubIndex: number;
}) => {
    // Vue uses 1-index with v-for ranges, this needs to be 0-indexed
    const blockIndex0 = blockIndex - 1;
    const blockSubIndex0 = blockSubIndex - 1;

    const rowIndex =
        3 * Math.floor(blockIndex0 / 3) + Math.floor(blockSubIndex0 / 3);
    const colIndex = 3 * (blockIndex0 % 3) + (blockSubIndex0 % 3);
    return 9 * rowIndex + colIndex;
};

const getBorders = (cell: SudokuCell) =>
    computed(() => {
        const isCenterRow = [2, 5, 8].includes(cell.row);
        const isCenterCol = [2, 5, 8].includes(cell.column);
        return {
            'border-l': isCenterCol,
            'border-r': isCenterCol,
            'border-t': isCenterRow,
            'border-b': isCenterRow,
        };
    });

const getDisplayType = (cell: SudokuCell) =>
    computed(() => {
        const given = cell.isGiven;
        const big =
            !given && (cell.currentValue > 0 || cell.candidates.length === 0);
        const little = !given && !big;
        return { given, big, little };
    });

const getColor = (cell: SudokuCell) =>
    computed(() => {
        const error = cell.hasConflictsWith.length > 0;
        if (error && cell.isSelected) return 'purple';
        if (error) return 'red';
        if (cell.isSelected) return 'blue';
        return '';
    });

export const getComputedValues = (cell: SudokuCell) => {
    return {
        borders: getBorders(cell),
        displayType: getDisplayType(cell),
        color: getColor(cell),
    };
};
