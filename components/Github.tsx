import { Tooltip } from 'antd';
import styled from 'styled-components';
import { GithubOutlined } from '@ant-design/icons';

const A = styled.a`
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    background-color: white;
    padding: 0.25rem;
    border: 1px solid #bebebe;
    border-radius: 50%;
    font-size: 2rem;
    line-height: 2rem;
    color: black;
    &:hover,
    &:focus {
        background-color: black;
        color: white;
        border: 0px;
    }
`;

export default function Github() {
    return (
        <A href="https://www.github.com/JaimeGensler/sudoku-dojo">
            <Tooltip placement="right" title="See source code on Github">
                <GithubOutlined />
            </Tooltip>
        </A>
    );
}
