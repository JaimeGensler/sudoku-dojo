import { Tooltip } from 'antd';
import styled from 'styled-components';
import { GithubOutlined } from '@ant-design/icons';

const Corner = styled.div`
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    background-color: white;
    padding: 0.25rem;
    border: 1px solid #bebebe;
    border-radius: 50%;

    &:hover {
        background-color: black;
        color: white;
        border: 0px;
    }
`;

const A = styled.a`
    font-size: 2rem;
    line-height: 2rem;
    color: black;
    &:hover {
        color: white;
    }
`;

export default function Github() {
    return (
        <Corner>
            <A href="https://www.github.com/JaimeGensler/sudoku-dojo">
                <Tooltip placement="right" title="See source code on Github">
                    <GithubOutlined />
                </Tooltip>
            </A>
        </Corner>
    );
}
