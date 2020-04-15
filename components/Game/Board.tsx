import styled from 'styled-components';

// import useSudoku from '../useSudoku';
import useSudoku from '../useSudoku';
import Block from './Block';

const Sudoku = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 540px;
    height: 540px;
    margin: 100px auto;

    border: 1px solid black;
    font-family: sans-serif;
`;

export default function Board() {
    const [blocks, handleClick] = useSudoku();

    const blockComponents = blocks.map(cells => {
        return (
            <Block
                cells={cells}
                handleClick={handleClick}
                key={cells[0].block}
            />
        );
    });

    return <Sudoku>{blockComponents}</Sudoku>;
}
