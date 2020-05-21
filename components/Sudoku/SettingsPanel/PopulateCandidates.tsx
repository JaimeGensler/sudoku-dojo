import { useContext } from 'react';
import styled from 'styled-components';
import { Button, Popover } from 'antd';

import sudokuContext from '../sudokuContext';
import InputItem from './InputItem';

const Info = styled.p`
    max-width: 250px;
`;

const content = () => (
    <Info>
        This will fill in all the candidate values{' '}
        <em>based on what Is currently inputted in the board</em>.{' '}
        <strong>Any candidate changes you've made will be overridden!</strong>
    </Info>
);
export default function Numbers() {
    const { applyRule } = useContext(sudokuContext);

    return (
        <InputItem label="Populate Candidates">
            <Popover content={content}>
                <Button onClick={() => applyRule('POPULATE_CANDIDATES')}>
                    Populate candidates for me!
                </Button>
            </Popover>
        </InputItem>
    );
}
