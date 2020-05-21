import { useContext } from 'react';
import { Radio, Typography, Form } from 'antd';
import sudokuContext from '../sudokuContext';

const { Group, Button } = Radio;
const { Item } = Form;

export default function InputModes() {
    const { gameState, applyRule } = useContext(sudokuContext);
    const onChange = () => applyRule('TOGGLE_INPUT_MODE');
    return (
        <Item label="Input Mode" colon={false}>
            <Group
                onChange={onChange}
                buttonStyle="solid"
                value={gameState.options.mode}
            >
                <Button value="VALUE">Values</Button>
                <Button value="CANDIDATE">Candidates</Button>
            </Group>
        </Item>
    );
}
