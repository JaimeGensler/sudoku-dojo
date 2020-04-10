import { useState, useEffect } from 'react';
import { useImmer } from 'use-immer';

import { CellShape } from './types';
import * as keyboard from './keyboardInputs';

export default class Sudoku {
    private cells: CellShape[];
    private updateCells: any;

    private selected: number;
    private setSelected: any;
    public constructor(board: CellShape[]) {
        const [cells, updateCells] = useImmer(board);
        this.cells = cells;
        this.updateCells = updateCells;

        const [selected, setSelected] = useState(NaN);
        this.selected = selected;
        this.setSelected = setSelected;

        this.attachListeners();
    }

    public getBlocks() {
        const blocks: CellShape[][] = Array.from({ length: 9 }, () => []);
        this.cells.forEach(cell => blocks[cell.block - 1].push(cell));
        return blocks;
    }

    public selectCell(index: number) {
        //if you press two at once it breaks please god help me
        //wait is this because I have multiple state change calls per action
        //am I dumb
        if (!Number.isNaN(this.selected)) this.setHighlight(this.selected, '');
        this.setHighlight(index, 'SELECTED');
        this.setSelected(index);
    }

    private keyboardInput(button: string) {
        if (
            button in keyboard.numbers &&
            this.selected &&
            !this.cells[this.selected].isGiven
        ) {
            this.setValue(keyboard.numbers[button]);
            this.updateCells(draft => {
                draft[this.selected].currentValue = keyboard.numbers[button];
            });
        } else if (button in keyboard.directions) {
            this.moveSelected(keyboard.directions[button]);
        }
    }

    private setValue(value: number) {
        const { row, column, block } = this.cells[this.selected];
        const neighbors = this.cells.reduce((acc, current) => {
            if (this.selected === current.index) return acc;
            if (
                row === current.row ||
                column === current.column ||
                block === current.block
            ) {
                acc.push(current.index);
            }
            return acc;
        }, [] as number[]);

        this.updateCells(draft => {
            draft[this.selected].currentValue = value;
            neighbors.forEach(index => {
                if (value === 0) draft[index].highlight = '';
                else if (value === draft[index].currentValue) {
                    draft[index].highlight = 'ERROR';
                }
            });
        });
    }

    private moveSelected(distance: number) {
        if (Number.isNaN(this.selected)) this.selectCell(0);
        else {
            if (distance === -9 && this.selected < 9) return; //top
            if (distance === 9 && this.selected > 71) return; //bottom
            if (distance === -1 && this.selected % 9 === 0) return; //left
            if (distance === 1 && (this.selected + 1) % 9 === 0) return; //right
            this.selectCell(this.selected + distance);
        }
    }

    private setHighlight(index: number, highlightType: string) {
        this.updateCells(draft => {
            draft[index].highlight = highlightType;
        });
    }

    private attachListeners() {
        const handleKeyPress = e => this.keyboardInput(e.key);

        useEffect(() => {
            window.addEventListener('keydown', handleKeyPress);
            return () => window.removeEventListener('keydown', handleKeyPress);
        });
    }
}
