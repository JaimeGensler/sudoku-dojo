import { useContext } from 'react';
import { Radio } from 'antd';
import sudokuContext from '../sudokuContext';

const { Group, Button } = Radio;

export default function InputModes() {
    const { gameState, applyRule } = useContext(sudokuContext);
    const onChange = () => applyRule('TOGGLE_INPUT_MODE');
    return (
        <Group
            onChange={onChange}
            buttonStyle="solid"
            value={gameState.options.mode}
        >
            <Button value="VALUE">Values</Button>
            <Button value="CANDIDATE">Candidates</Button>
        </Group>
    );
}
