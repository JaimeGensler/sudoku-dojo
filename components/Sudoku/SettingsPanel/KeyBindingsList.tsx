import { List, Popover, Typography } from 'antd';
import styled from 'styled-components';

const { Item } = List;
const Label = styled.p`
    font-weight: bold;
    max-width: 25%;
`;
const Explanation = styled.p`
    font-style: italic;
    max-width: 75%;
`;
const keyBindings: { [key: string]: string } = {
    '1 - 9': 'Input number with current mode',
    '! - (': 'Input number with alternate mode',
    '0, Backspace, Delete': 'Clear cell value (does not clear candidates)',
    'WASD, ArrowKeys': 'Move selected cell',
    n: 'Switch input mode',
    p: 'Populate candidates from current board position',
};
export default function KeyBindingsList() {
    const listItems = Object.keys(keyBindings).map(key => (
        <Item key={key}>
            <Label>{key}</Label>
            <Explanation>{keyBindings[key]}</Explanation>
        </Item>
    ));
    return (
        <Popover content={<List size="small">{listItems}</List>}>
            <Typography.Title level={4}>
                Hover to see key bindings
            </Typography.Title>
        </Popover>
    );
}
