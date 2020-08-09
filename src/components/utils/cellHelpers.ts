// Vue forces these to be optional (I think), so I'm just throwing because they're really not.
interface CellProps {
    blockIndex?: number;
    blockSubIndex?: number;
}
export function getCellIndex({ blockIndex, blockSubIndex }: CellProps) {
    if (blockIndex === undefined || blockSubIndex === undefined) {
        throw new TypeError(
            'getCellIndex(): blockIndex or blockSubIndex was undefined',
        );
    }
    // Vue 1-indexes with v-for ranges, this needs to be 0-indexed
    const blockIndex0 = blockIndex - 1;
    const blockSubIndex0 = blockSubIndex - 1;

    const rowIndex =
        3 * Math.floor(blockIndex0 / 3) + Math.floor(blockSubIndex0 / 3);
    const colIndex = 3 * (blockIndex0 % 3) + (blockSubIndex0 % 3);
    return 9 * rowIndex + colIndex;
}

export function getCellBorders(subIndex: number | undefined) {
    const isCenterRow = [4, 5, 6].includes(subIndex ?? 0);
    const isCenterCol = [2, 5, 8].includes(subIndex ?? 0);
    return {
        'border-l': isCenterCol,
        'border-r': isCenterCol,
        'border-t': isCenterRow,
        'border-b': isCenterRow,
    };
}
