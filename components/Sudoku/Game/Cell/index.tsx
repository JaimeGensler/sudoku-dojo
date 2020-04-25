import styled from 'styled-components';

import { SudokuCell } from '../../../../lib/sudoku/types';
import Big from './Big';
import Little from './Little';
import Given from './Given';

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

type Props = { cell: SudokuCell; handleClick: (i: number) => void };
export default function Cell({ cell, handleClick }: Props) {
    return (
        <Border onClick={() => handleClick(cell.index)}>
            {cellType(cell)}
        </Border>
    );
}
