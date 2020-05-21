import { useContext } from 'react';
import { Radio } from 'antd';
import sudokuContext from '../sudokuContext';
import InputItem from './InputItem';

const { Group, Button } = Radio;

export default function InputModes() {
    const { gameState, applyRule } = useContext(sudokuContext);
    const onChange = () => applyRule('TOGGLE_INPUT_MODE');
    return (
        <InputItem label="Input Mode">
            <Group
                onChange={onChange}
                buttonStyle="solid"
                value={gameState.options.mode}
            >
                <Button value="VALUE">Values</Button>
                <Button value="CANDIDATE">Candidates</Button>
            </Group>
        </InputItem>
    );
}
