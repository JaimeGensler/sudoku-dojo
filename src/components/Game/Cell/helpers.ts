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
export const getComputedValues = (cell: SudokuCell) => {
    const displayType = getDisplayType(cell);
    return {
        borders: getBorders(cell),
        displayType,
        colors: getColors(
            cell,
            displayType.value.given ? blockLookup : outlineLookup,
        ),
    };
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

const outlineLookup = {
    blue: ['bg-blue-200', 'text-blue-700'],
    purple: ['bg-purple-200', 'text-purple-700'],
    red: ['bg-red-200', 'text-red-700'],
};
const blockLookup = {
    blue: ['bg-blue-700', 'text-blue-100'],
    purple: ['bg-purple-700', 'text-purple-100'],
    red: ['bg-red-700', 'text-red-100'],
};
const getColors = (cell: SudokuCell, displayObj: typeof blockLookup) =>
    computed(() => {
        const error = cell.hasConflictsWith.length > 0;
        if (error && cell.isSelected) return displayObj['purple'];
        if (error) return displayObj['red'];
        if (cell.isSelected) return displayObj['blue'];
        return null;
    });
