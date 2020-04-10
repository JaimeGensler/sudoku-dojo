import styled from 'styled-components';

import { CellShape } from '../../lib/types';
import Cell from './Cell';

const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid black;
`;

type Props = {
    cells: CellShape[];
    clickHandleCreator: (i: number) => () => void;
};
export default function Block({ cells, clickHandleCreator }: Props) {
    const cellComponents = cells.map((cell: CellShape) => {
        return (
            <Cell
                clickHandle={clickHandleCreator(cell.index)}
                cell={cell}
                key={`${cell.row} ${cell.column}`}
            />
        );
    });

    return <Grid>{cellComponents}</Grid>;
}
