import styled from 'styled-components';
import Block from './Block';

const Sudoku = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    width: 70vh;
    height: 70vh;

    border: 1px solid black;
    font-family: sans-serif;
`;

export default function Board() {
    const blockComponents = Array.from({ length: 9 }, (x, i) => {
        return <Block blockIndex={i} key={i} />;
    });

    return <Sudoku>{blockComponents}</Sudoku>;
}
