import styled from 'styled-components';
import Cell from './Cell';

const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid black;
`;

const calculateCellIndex = (block: number, cell: number) => {
    const rowIndex = 9 * (Math.floor(block / 3) * 3 + Math.floor(cell / 3));
    const colIndex = (cell % 3) + 3 * (block % 3);
    return rowIndex + colIndex;
};

type Props = { blockIndex: number };
export default function Block({ blockIndex }: Props) {
    const cellComponents = Array.from({ length: 9 }, (x, i) => (
        <Cell
            cellIndex={calculateCellIndex(blockIndex, i)}
            key={`${blockIndex} ${i}`}
        />
    ));

    return <Grid>{cellComponents}</Grid>;
}
