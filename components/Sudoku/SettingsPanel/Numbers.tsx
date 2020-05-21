import { useContext } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import sudokuContext from '../sudokuContext';

const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.25rem;
`;
const Clear = styled(Button)`
    grid-column: 1 / 4;
`;
export default function Numbers() {
    const { gameState, applyRule } = useContext(sudokuContext);

    const numberButtons = Array.from({ length: 9 }, (x, i) => {
        return (
            <Button
                size="large"
                onClick={() =>
                    applyRule(`SET_${gameState.options.mode}`, i + 1)
                }
                key={i}
            >
                {i + 1}
            </Button>
        );
    });

    return (
        <Grid>
            {numberButtons}
            <Clear onClick={() => applyRule('SET_VALUE', 0)}>Clear</Clear>
        </Grid>
    );
}
