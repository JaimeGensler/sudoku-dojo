import { SudokuCell } from '../../lib/types';

interface CellProps {
    blockIndex: number;
    blockSubIndex: number;
}
export function getCellIndex({ blockIndex, blockSubIndex }: CellProps) {
    // Vue will use 1-index with v-for ranges, this needs to be 0-indexed
    const blockIndex0 = blockIndex - 1;
    const blockSubIndex0 = blockSubIndex - 1;

    const rowIndex =
        3 * Math.floor(blockIndex0 / 3) + Math.floor(blockSubIndex0 / 3);
    const colIndex = 3 * (blockIndex0 % 3) + (blockSubIndex0 % 3);
    return 9 * rowIndex + colIndex;
}

export function getCellStyle(cell: SudokuCell, subIndex: number) {
    const isCenterRow = [4, 5, 6].includes(subIndex);
    const isCenterCol = [2, 5, 8].includes(subIndex);
    return {
        'border-l': isCenterCol,
        'border-r': isCenterCol,
        'border-t': isCenterRow,
        'border-b': isCenterRow,
        'bg-blue-600': cell.isSelected,
        'text-white': cell.isSelected,
    };
}

export function getDisplayLookup({
    isGiven,
    currentValue,
    candidates,
}: SudokuCell) {
    const given = isGiven;
    const big = !given && (currentValue > 0 || candidates.length === 0);
    const little = !given && !big;
    return { given, big, little };
}
