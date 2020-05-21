import { useContext } from 'react';
import styled from 'styled-components';

import { SudokuCell } from '../../../../lib/sudoku/types';
import sudokuContext from '../../sudokuContext';
import Big from './Big';
import Given from './Given';
import Little from './Little';

const Border = styled.div`
    &:nth-child(3n-1) {
        border-left: 1px solid dimgray;
        border-right: 1px solid dimgray;
    }
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
        border-top: 1px solid dimgray;
        border-bottom: 1px solid dimgray;
    }
`;

const cellType = (cell: SudokuCell) => {
    if (cell.isGiven) {
        return (
            <Given
                solvedValue={cell.solvedValue}
                highlight={getHighlight(cell.isSelected, cell.hasConflictsWith)}
            />
        );
    }
    if (cell.currentValue || !cell.candidates.length) {
        return (
            <Big
                currentValue={cell.currentValue}
                highlight={getHighlight(cell.isSelected, cell.hasConflictsWith)}
            />
        );
    }
    return (
        <Little
            candidates={cell.candidates}
            highlight={getHighlight(cell.isSelected, cell.hasConflictsWith)}
        />
    );
};
const getHighlight = (isSelected: boolean, conflicts: number[]) => {
    if (isSelected) {
        if (!!conflicts.length) {
            return 'BOTH';
        }
        return 'SELECTED';
    }
    if (!!conflicts.length) return 'ERROR';
    return 'NONE';
};

type Props = { cellIndex: number };

export default function Cell({ cellIndex }: Props) {
    const { gameState, applyRule } = useContext(sudokuContext);
    const cell = gameState.cells[cellIndex];
    const handleClick = () => applyRule('CLICK_SELECT', cellIndex);

    return <Border onClick={handleClick}>{cellType(cell)}</Border>;
}
